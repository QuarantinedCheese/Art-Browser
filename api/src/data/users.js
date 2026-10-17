import { randomUUID } from 'node:crypto';

// Events created via API get a randomUUID()
// Times stored in UTC. 21:00Z on Oct 2 is 5pm Toronto.
// Can get UUIDs for testing via https://www.uuidgenerator.net/

// Data itself, functions related to data below
const users = [
    {
        id: '3569a16d-e3a7-43b0-9282-8cd99ab82683',
        username: 'TestUsername1',
        name: 'TestUser1',
        email: 'TestUserEmail1@gmail.com',
        creationDate: '2020-03-02T14:00:00.023Z'
    },
    {
        id: '1e9c22d0-c0a9-40d1-8a5a-c6d7fb6665db',
        username: 'TestUsername2',
        name: 'TestUser2',
        email: 'TestUserEmail2@gmail.com',
        creationDate: '2021-05-02T18:20:21.123Z',
    },
    {
        id: '67c7ccd6-2f95-4a34-a059-98c309bcfe82',
        username: 'TestUsername3',
        name: 'TestUser3',
        email: 'TestUserEmail3@hotmail.com',
        creationDate: '2021-11-23T10:12:34.245Z',
    },
    {
        id: 'c0527a44-92ff-4eb5-bc75-ef736f1b3ea3',
        username: 'TestUsername4',
        name: 'TestUser4',
        email: 'TestUserEmail4@gmail.com',
        creationDate: '2021-01-10T03:34:32.313Z'
    }
];


// Following functions follow CRUD
// Extra functions may be required for other files.
// These will be used by src/controllers/users.controllers.js, then routed
export function findUsers({username, q} = {}) {
    let searchResult = users;
    if (username) { // Finds user by username
        results = results.filter((user) => user.username === username);
    }
    if (q) { // Finds user by the search
        const search = q.toLowerCase();
        results = results.filter((user) => user.username.toLowerCase().includes(search));
    }
}

export function findUserById(id) {
    // Returns the user with matching ID
    return users.find((user) => user.id === id); 
}

export function insertUser(fields) {
    // Creates new user using fields. The fields here should already be validated.
    const user = {id: randomUUID(), ...fields, creationDate: new Date().toISOString() };
    users.push(user);
    return user;
}

export function updateUserById(id, changes) {
    // TODO: Update user data (eg. email, username, or name)
    const user = findUserById(id)
    if (user) {
        Object.assign(user, changes);
    }
    return user;
}

export function deleteUserById(id) {
    // TODO: Delete user entry via ID
}