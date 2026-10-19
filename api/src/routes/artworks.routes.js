// TODO: Routing for artworks
import { Router } from 'express';
import { listArtworks, getArtwork } from '../controllers/artworks.controllers.js';

export const artworkRouter = Router();

artworkRouter.get('/', listArtworks);
artworkRouter.get('/:id', getArtwork);