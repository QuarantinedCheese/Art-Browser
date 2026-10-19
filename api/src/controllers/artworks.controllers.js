import { findArtworks, findArtworkById, fetchExternalSearch, fetchExternalById } from '../data/artwork.js';
import { HttpError } from '../utils/http-error.js';

export async function listArtworks(req, res, next) {
    try {
        const { artist, q, external } = req.query;
        if (q !== undefined && typeof q !== 'string') {
            throw new HttpError(400, 'Invalid query', { q: 'Send q only once' });
        }
        if (q && external === 'true') {
            const externalResults = await fetchExternalSearch(q);
            return res.json({ data: externalResults });
        }
        const results = findArtworks({ artist, q });
        return res.json({ data: results });
    } catch (err) {
        next(err);
    }
}

export async function getArtwork(req, res, next) {
    try {
        let artwork = findArtworkById(req.params.id);
        if (!artwork) {
            try {
                artwork = await fetchExternalById(req.params.id);
            } catch (err) {
                if (err instanceof HttpError) throw err;
            }
        }
        if (!artwork) {
            throw new HttpError(404, 'Artwork not found.');
        }
        return res.json({ data: artwork });
    } catch (err) {
        next(err);
    }
}