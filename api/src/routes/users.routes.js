// TODO: Routing for the users
import { Router } from 'express';
import { createUser, deleteUser, listUsers, getUser, updateUser } from '../controllers/users.controllers';
// Also need to import validation from middleware

// Paths are relative to where the router is mounted in app.js
// For users, that is /api/users
export const usersRouter = Router();

usersRouter.get('/', listUsers);
// usersRouter.post('/', 'validate placeholder', createUser);
usersRouter.get('/:id', getUser);
// usersRouter.patch('/:id', 'validate placeholder (partial)', updateUser);
usersRouter.delete('/:id', deleteUser);