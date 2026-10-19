// TODO: Routing for the favourites

import { Router } from "express";
import { createFavourite, findFavourites, updateFavourites,  deleteFavourite} from '../controllers/favourites.controllers.js';
import { validateFavourites } from "../middleware/validate-favourites";

export const favouritesRouter = Router();

favouritesRouter.get('/', findFavourites);
favouritesRouter.post('/', validateFavourites(), createFavourite);
favouritesRouter.patch('/:id', validateFavourites(), updateFavourites);
favouritesRouter.delete('/:id', deleteFavourite);
