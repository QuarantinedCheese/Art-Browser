// TODO: Routing for the users
import { Router } from 'express';
import { createUser, deleteUser, listUsers, getUser, updateUser } from '../controllers/users.controllers.js';
// Also need to import validation from middleware

// Paths are relative to where the router is mounted in app.js
// For users, that is /api/users
export const usersRouter = Router();

// ? is used to tell the api we are now passing parameters. eg. ?q=1 would set q (search) to 1.

usersRouter.get('/', listUsers); // eg. http://localhost:4000/api/users/?q=1
usersRouter.get('/:id', getUser); // eg. http://localhost:4000/api/users/67c7ccd6-2f95-4a34-a059-98c309bcfe82
// usersRouter.post('/', 'validate placeholder', createUser);
// usersRouter.patch('/:id', 'validate placeholder (partial)', updateUser);
usersRouter.delete('/:id', deleteUser);