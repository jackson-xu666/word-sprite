const fs = require('fs');
const path = require('path');

const { CF_ACCOUNT_ID, CF_API_TOKEN, CF_KV_NAMESPACE_ID } = process.env;

if (!CF_ACCOUNT_ID || !CF_API_TOKEN || !CF_KV_NAMESPACE_ID) {
    console.error('Missing CF_ACCOUNT_ID, CF_API_TOKEN, or CF_KV_NAMESPACE_ID.');
    process.exit(1);
}

const filePath = path.resolve(__dirname, '..', 'private', 'word-db.json');
if (!fs.existsSync(filePath)) {
    console.error('private/word-db.json was not found. Run scripts/export-word-db.cjs first.');
    process.exit(1);
}

async function main() {
    const body = fs.readFileSync(filePath);
    const url = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values/WORD_DB`;
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${CF_API_TOKEN}`,
            'Content-Type': 'application/json; charset=utf-8',
        },
        body,
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.success === false) {
        console.error(JSON.stringify(result, null, 2));
        process.exit(1);
    }

    console.log('Uploaded WORD_DB to Cloudflare KV.');
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});
