const DICTIONARY_API = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export async function onRequestGet({ request }) {
    const url = new URL(request.url);
    const word = (url.searchParams.get('word') || '').trim().toLowerCase();

    if (!/^[a-z]+(?:'[a-z]+)?$/.test(word)) {
        return json({ error: 'A valid English word is required.' }, 400);
    }

    try {
        const dictionaryResponse = await fetch(`${DICTIONARY_API}${encodeURIComponent(word)}`, {
            headers: { Accept: 'application/json' },
        });

        if (!dictionaryResponse.ok) {
            return json({ error: 'Pronunciation was not found.' }, 404);
        }

        const entries = await dictionaryResponse.json();
        const audioUrls = entries.flatMap(entry => entry.phonetics || [])
            .map(phonetic => phonetic.audio)
            .filter(Boolean)
            .map(audio => audio.startsWith('//') ? `https:${audio}` : audio);

        const audioUrl = audioUrls.find(audio => /[-_]us[-_.]/i.test(audio)) || audioUrls[0];
        if (!audioUrl || !audioUrl.startsWith('https://')) {
            return json({ error: 'Pronunciation audio was not found.' }, 404);
        }

        const audioResponse = await fetch(audioUrl);
        if (!audioResponse.ok || !audioResponse.body) {
            return json({ error: 'Pronunciation audio is unavailable.' }, 502);
        }

        return new Response(audioResponse.body, {
            status: 200,
            headers: {
                'Content-Type': audioResponse.headers.get('Content-Type') || 'audio/mpeg',
                'Cache-Control': 'public, max-age=604800',
                'X-Content-Type-Options': 'nosniff',
            },
        });
    } catch (error) {
        return json({ error: 'Pronunciation service is temporarily unavailable.' }, 502);
    }
}

function json(body, status) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-store',
        },
    });
}
