import { randomUUID } from 'node:crypto';

// Events created via API get a randomUUID()
// Times stored in UTC. 21:00Z on Oct 2 is 5pm Toronto.
// Can get UUIDs for testing via https://www.uuidgenerator.net/

// Data itself, functions related to data below
const users = [
    {
        id: '3569a16d-e3a7-43b0-9282-8cd99ab82683',
        name: 'TestUser1',
        email: 'TestUserEmail1@gmail.com',
        creationDate: '2020-03-02T14:00:00.023Z'
    },
    {
        id: '1e9c22d0-c0a9-40d1-8a5a-c6d7fb6665db',
        name: 'TestUser2',
        email: 'TestUserEmail2@gmail.com',
        creationDate: '2021-05-02T18:20:21.123Z',
    },
    {
        id: '67c7ccd6-2f95-4a34-a059-98c309bcfe82',
        name: 'TestUser3',
        email: 'TestUserEmail3@hotmail.com',
        creationDate: '2021-11-23T10:12:34.245Z',
    },
    {
        id: 'c0527a44-92ff-4eb5-bc75-ef736f1b3ea3',
        name: 'TestUser4',
        email: 'TestUserEmail4@gmail.com',
        creationDate: '2021-01-10T03:34:32.313Z'
    }
];