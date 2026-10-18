// TODO: Routing for the users
import { Router } from 'express';
import { createUser, deleteUser, listUsers, getUser, updateUser } from '../controllers/users.controllers.js';
import { validateUser } from '../middleware/validate-user.js';

// Paths are relative to where the router is mounted in app.js
// For users, that is /api/users
export const usersRouter = Router();

// ? is used to tell the api we are now passing parameters. eg. ?q=1 would set q (search) to 1.

usersRouter.get('/', listUsers); // eg. curl.exe -X GET http://localhost:4000/api/users/?q=1
usersRouter.get('/:id', getUser); // eg. curl.exe -X GET http://localhost:4000/api/users/67c7ccd6-2f95-4a34-a059-98c309bcfe82
usersRouter.post('/', validateUser(), createUser);
usersRouter.patch('/:id', validateUser({ partial: true }), updateUser); // curl.exe -X PATCH http://localhost:4000/api/users/3569a16d-e3a7-43b0-9282-8cd99ab82683 ^ -H "Content-Type: application/json" ^ -d "{\`"username\`": \`"testing123\`"}"
usersRouter.delete('/:id', deleteUser);