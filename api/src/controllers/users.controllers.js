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
    // TODO: Find requested user
}

export function createUser(req, res) {
    // TODO: create new user
}

export function updateUser(req, res) {
    // TODO: update user profile
}

export function deleteUser(req, res) {
    // TODO: delete user profile
}