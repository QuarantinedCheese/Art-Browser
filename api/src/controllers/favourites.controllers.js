// TODO: control favourites (?)

import { createFavourite, findFavourites, findFavouriteById, updateFavourites, updateFavouritesById,  deleteFavourite, deleteFavouriteById } from "../data/favourites";
import { HttpError } from "../utils/http-error";

export function createFavourite (req, res) {
    const favourite = insertFavourite(req.body);

    res.location(`/api/favourites/${favourite.id}`)
    .status(201)
    .json({ data : favourite});
}

export function findFavourites (req, res) {
    const favourite = findFavouriteById(req.params.id);

    if(!favourite) {
        throw new HttpError(404, 'Favourite not found.');
    }

    res.json({data: favourite});
}

export function updateFavourites (req, res) {
    const favourite = updateFavouritesById(
        req.params.id, req.body
    );

    if (!favourite) {
        throw new HttpError(404, 'Favourite not found.');
    }
    res.json({ data : favourite});
}

export function deleteFavourite (req, res) {
    if (!deleteFavouriteById(req.params.id)) {
        throw new HttpError(404, 'Favourite not found.');
    }

    res.status(204).end();
}

