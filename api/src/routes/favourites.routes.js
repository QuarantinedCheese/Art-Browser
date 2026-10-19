// TODO: Routing for the favourites

import { Router } from "express";
import { createFavouriteController, findFavouritesController, getFavouriteById, updateFavouriteController,  deleteFavouriteController} from '../controllers/favourites.controllers.js';
import { validateFavourites } from "../middleware/validate-favourites";

export const favouritesRouter = Router();

favouritesRouter.get('/', findFavouritesController);
favouritesRouter.get('/:id', getFavouriteById);
favouritesRouter.post('/', validateFavourites(), createFavouriteController);
favouritesRouter.patch('/:id', validateFavourites(), updateFavouriteController);
favouritesRouter.delete('/:id', deleteFavouriteController);
