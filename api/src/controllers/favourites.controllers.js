// TODO: control favourites (?)

import { createFavourite, findFavourites, findFavouriteById, updateFavourites, deleteFavourite } from "../data/favourites.js";
import { HttpError } from "../utils/http-error";

export function createFavouriteController (req, res) {
    const favourite = createFavourite(req.body);

    res.location(`/api/favourites/${favourite.favouritesId}`)
    .status(201)
    .json({ data : favourite});
}

export function findFavouritesController (req, res) {
    const favourites = findFavourites(req.query);

    res.json({data: favourites});
}

export function getFavouriteById (req, res) {
    const favourite = findFavouriteById(
        req.params.id
    );

    if (!favourite) {
        throw new HttpError(404, 'Favourite not found.');
    }
    res.json({ data : favourite});
}

export function updateFavouriteConroller (req, res) {
    const favourite = updateFavourites(req.params.id, req.body);

    if (!favourite) {
        throw new HttpError(404, "Favourite not found.");
    }
    res.json({ data: favourite});
}

export function deleteFavouriteController(req, res) {
    const deleted = deleteFavourite(req.params.id);

    if (!deleted) {
        throw new HttpError(404, "Favourite not found.");
    }
    res.status(204).end();
}

