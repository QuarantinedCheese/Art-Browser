// TODO: Routing for the favourites

import { Router } from "express";
import { createFavouriteController, findFavouritesController, getFavouriteById, updateFavouriteController,  deleteFavouriteController} from '../controllers/favourites.controllers.js';
import { validateFavourites } from "../middleware/validate-favourites.js";

export const favouritesRouter = Router();

// - /api/favourites
favouritesRouter.get('/', findFavouritesController);
favouritesRouter.get('/:id', getFavouriteById);
favouritesRouter.post('/', validateFavourites(), createFavouriteController);
favouritesRouter.patch('/:id', validateFavourites({ partial: true }), updateFavouriteController);
favouritesRouter.delete('/:id', deleteFavouriteController);
