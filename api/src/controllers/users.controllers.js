import { findUsers, deleteUserById, findUserById, insertUser, updateUserById } from "../data/users";
import { HttpError, httpError } from '../utils/http-error.js';

// req is the user request, res is the response we are building with each function

export function listUsers(req, res) {
    const {username, q} = req.query
    // Shouldn't have to verify that username exists, but for artworks/favourites,
    // may be worth replacing 'username' with something like 'genre'.
    // May need to create a list of possible genres in the appropriate validators.

    // Search Validation
    if (q !== undefined && typeof q !== 'string') {
        throw new HttpError(400, 'invalid query', {q: 'Send q only once'});
    }
    res.json({data: findUsers( username, q)})
}

export function getUser(req, res) {
    // Finds user by ID and throws an error if it fails to find user.
    const user = findUserById(req.params.id);
    if (!user) {
        throw new HttpError(404, 'User not found.');
    }
    res.json({data: user});
}

export function createUser(req, res) {
    // Creates new user based on request
    const user = insertUser(req.body);
    res.location(`/api/users/${user.id}`).status(201).json({data: user});
}

export function updateUser(req, res) {
    // Updates user profile based on the request
    const user = updateUserById(req.params.id, req.body);
    if (!user) {
        throw newHttpError(404, 'User not found.');
    }
    res.json({data: user});
}

export function deleteUser(req, res) {
    // TODO: delete user profile
    if (!deleteUserById(req.params.id)) {
        throw new HttpError(404, 'User not found.');
    }
    res.status(204).end();
}