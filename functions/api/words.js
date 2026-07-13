export async function onRequestGet(context) {
    const { env } = context;

    if (!env.WORDS_KV) {
        return json({ error: 'WORDS_KV binding is not configured.' }, 500);
    }

    const data = await env.WORDS_KV.get('WORD_DB', { type: 'json' });
    if (!data) {
        return json({ error: 'WORD_DB was not found in WORDS_KV.' }, 404);
    }

    return json(data, 200, {
        'Cache-Control': 'public, max-age=300',
    });
}

function json(body, status = 200, headers = {}) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            ...headers,
        },
    });
}
