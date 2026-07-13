const fs = require('fs');
const path = require('path');

const {
    CF_ACCOUNT_ID,
    CF_API_TOKEN,
    CF_PROJECT_NAME = 'danxiaoling',
    CF_KV_NAMESPACE_TITLE = 'WORD_SPRITE_WORDS',
} = process.env;

if (!CF_ACCOUNT_ID || !CF_API_TOKEN) {
    console.error('Missing CF_ACCOUNT_ID or CF_API_TOKEN.');
    process.exit(1);
}

const apiBase = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}`;
const headers = {
    Authorization: `Bearer ${CF_API_TOKEN}`,
    'Content-Type': 'application/json',
};

async function request(pathname, options = {}) {
    const response = await fetch(`${apiBase}${pathname}`, {
        ...options,
        headers: {
            ...headers,
            ...(options.headers || {}),
        },
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.success === false) {
        throw new Error(JSON.stringify(data, null, 2));
    }
    return data.result;
}

async function findOrCreateNamespace() {
    const namespaces = await request('/storage/kv/namespaces');
    const existing = namespaces.find(namespace => namespace.title === CF_KV_NAMESPACE_TITLE);
    if (existing) return existing;

    return request('/storage/kv/namespaces', {
        method: 'POST',
        body: JSON.stringify({ title: CF_KV_NAMESPACE_TITLE }),
    });
}

function withKvBinding(config, namespaceId) {
    return {
        ...(config || {}),
        kv_namespaces: {
            ...((config && config.kv_namespaces) || {}),
            WORDS_KV: {
                namespace_id: namespaceId,
            },
        },
    };
}

async function bindNamespaceToPages(namespaceId) {
    const project = await request(`/pages/projects/${CF_PROJECT_NAME}`);
    const deploymentConfigs = project.deployment_configs || {};

    const updatedConfigs = {
        ...deploymentConfigs,
        production: withKvBinding(deploymentConfigs.production, namespaceId),
        preview: withKvBinding(deploymentConfigs.preview, namespaceId),
    };

    await request(`/pages/projects/${CF_PROJECT_NAME}`, {
        method: 'PATCH',
        body: JSON.stringify({
            deployment_configs: updatedConfigs,
        }),
    });
}

async function uploadWordDb(namespaceId) {
    const filePath = path.resolve(__dirname, '..', 'private', 'word-db.json');
    if (!fs.existsSync(filePath)) {
        throw new Error('private/word-db.json was not found. Run scripts/export-word-db.cjs first.');
    }

    const response = await fetch(`${apiBase}/storage/kv/namespaces/${namespaceId}/values/WORD_DB`, {
        method: 'PUT',
        headers,
        body: fs.readFileSync(filePath),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.success === false) {
        throw new Error(JSON.stringify(data, null, 2));
    }
}

async function main() {
    const namespace = await findOrCreateNamespace();
    await bindNamespaceToPages(namespace.id);
    await uploadWordDb(namespace.id);
    console.log(`WORDS_KV is bound to ${CF_PROJECT_NAME} and WORD_DB was uploaded to ${namespace.title}.`);
}

main().catch(error => {
    console.error(error.message || error);
    process.exit(1);
});
