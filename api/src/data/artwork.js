import { HttpError } from '../utils/http-error.js';

// Add image portion later

const artworks = [
    {
        id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
        title: 'The Great Wave off Kanagawa',
        altTitles: [],
        date: '1831',
        artist: 'Hokusai',
        creationLocation: 'Japan',
        shortDescription: 'Woodblock print showing massive waves framing Mount Fuji.'
    },
    {
        id: 'c3d4e5f6-a789-01bc-def1-234567890123',
        title: 'The Starry Night',
        altTitles: ['Starry Night'],
        date: '1889',
        artist: 'Vincent van Gogh',
        creationLocation: 'Saint-Rémy-de-Provence, France',
        shortDescription: 'Post-impressionistic oil painting depicting a swirling night sky over a Dutch village.'
    },
    {
        id: 'd4e5f6a7-8901-bcde-f123-456789012345',
        title: 'The Scream',
        altTitles: ['Der Schrei der Natur'],
        date: '1893',
        artist: 'Edvard Munch',
        creationLocation: 'Norway',
        shortDescription: 'Iconic expressionist painting depicting a figure with an agonized expression against a fiery sky.'
    }
];

export function findArtworks({ artist, q } = {}) {
    let results = artworks;
    if (artist) {
        results = results.filter((art) => art.artist.toLowerCase() === artist.toLowerCase());
    }
    if (q) {
        const search = q.toLowerCase();
        results = results.filter((art) => 
            art.title.toLowerCase().includes(search) || 
            art.artist.toLowerCase().includes(search)
        );
    }
    return results;
}

export function findArtworkById(id) {
    return artworks.find((art) => art.id === id);
}

// Inmemory cache 5min expiry 
const internalMemory = new Map();
const CACHE = 5 * 60 * 1000;

function getCached(key) {
    if (!internalMemory.has(key)) return null;
    const cached = internalMemory.get(key);
    if (Date.now() > cached.expiry) {
        internalMemory.delete(key);
        return null;
    }
    console.log('cache hit');
    return cached.data;
}

function setCache(key, data) {
    internalMemory.set(key, {
        data,
        expiry: Date.now() + CACHE
    });
}

export async function fetchExternalSearch(query) {
    const key = `search_${query.toLowerCase()}`;
    const cached = getCached(key);
    if (cached) return cached;
    try {
        const res = await fetch(
            `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(query)}`,
            { signal: AbortSignal.timeout(5000) }
        );
        if (!res.ok) {
            throw new HttpError(502, 'Bad Gateway');
        }
        const json = await res.json();
        const results = json.data.map(item => ({
            id: String(item.id),
            title: item.title,
            altTitles: item.alt_titles || [],
            date: item.date_display,
            artist: item.artist_display,
            creationLocation: item.place_of_origin,
            shortDescription: item.thumbnail?.alt_text || ''
        }));
        setCache(key, results);
        return results;
    } catch (err) {
        if (err.name === 'AbortError' || err.name === 'TimeoutError') {
            throw new HttpError(504, 'Gateway Timeout');
        }
        if (err instanceof HttpError) throw err;
        throw new HttpError(502, 'Bad Gateway');
    }
}

export async function fetchExternalById(id) {
    const key = `id_${id}`;
    const cached = getCached(key);
    if (cached) return cached;
    try {
        const res = await fetch(
            `https://api.artic.edu/api/v1/artworks/${id}`,
            { signal: AbortSignal.timeout(5000) }
        );
        if (!res.ok) {
            throw new HttpError(502, 'Bad Gateway');
        }
        const json = await res.json();
        const item = json.data;
        const artwork = {
            id: String(item.id),
            title: item.title,
            altTitles: item.alt_titles || [],
            date: item.date_display,
            artist: item.artist_display,
            creationLocation: item.place_of_origin,
            shortDescription: item.thumbnail?.alt_text || ''
        };

        setCache(key, artwork);
        return artwork;
    } catch (err) {
        if (err.name === 'AbortError' || err.name === 'TimeoutError') {
            throw new HttpError(504, 'Gateway Timeout');
        }
        if (err instanceof HttpError) throw err;
        throw new HttpError(502, 'Bad Gateway');
    }
}

export function addToInternalMemory(key, value) {
    setCache(key, value);
}

export function updateInternalMemory(key, value) {
    if (internalMemory.has(key)) {
        setCache(key, value);
    }
}

export function deleteFromInternalMemory(key) {
    internalMemory.delete(key);
}