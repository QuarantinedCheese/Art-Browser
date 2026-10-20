# API README

## API Setup
To begin working with the API, you must first open the /api in an integrated terminal, and run the following commands: 
* `npm install`
* `cp .env.example .env`

The first command ensures that all node modules are installed, and the second readies the environment variables.
At the current moment, the only env variable is PORT, set to 4000 by default.

Once setup is complete, ensure you are still in the /api, and run `npm run dev` to run it continuously, and `npm run start` to start it once, in which case if the server crashes, it will stay down.

## Endpoints Table
### User
|Method| Path        |Success Code(s)| Error Code(s)                |
|------|-------------|---------------|------------------------------|
|GET   |/api/user/   |200 OK         |400 Bad Request               |
|GET   |/api/user/:id|200 OK         |404 Not Found                 |
|POST  |/api/user/   |201 Created    |400 Bad Request               |
|PATCH |/api/user/:id|200 OK         |400 Bad Request, 404 Not Found|
|DELETE|/api/user/:id|204 No Content |404 Not Found                 |
 
Many things changed from proposal to implementation because at the time of proposal, we weren't sure what was and wasn't required. For this reason we mistakenly left out DELETE and GET with ID. Additionally, there seems to have been a typo with POST, where the success code was '210', a non-existent code. During implementation, this was fixed.

Current datamodel for users goes as follows: 
* id
* username
* email
* account creation date
 
This may be expanded in the future.

### Favourites
|Method| Path              |Success Code(s)| Error Code(s)                |
|------|-------------------|---------------|------------------------------|
|GET   |/api/favourites/   |200 OK         |400 Bad Request               |
|GET   |/api/favourites/:id|200 OK         |404 Not Found                 |
|POST  |/api/favourites/   |201 Created    |400 Bad Request               |
|PATCH |/api/favourites/:id|200 OK         |400 Bad Request, 404 Not Found|
|DELETE|/api/favourites/:id|204 No Content |404 Not Found                 |
 
Many things have changed for favourites as did user, we had mistakenly left out POST, PATCH, and DELETE for favourites, which has been fixed in implementation, as well as the path being unnecessary, which has also been fixed. 

Current data model for favourites:
* our ID
* Chicago Institute's ID
* title
* artist

This will likely be expanded in the future to accommodate more detailed information.
### Artwork
|Method| Path           |Success Code(s)| Error Code(s) |
|------|----------------|---------------|---------------|
|GET   |/api/artwork/   |200 OK         |400 Bad Request|
|GET   |/api/artwork/:id|200 OK         |404 Not Found  | 

Little has changed from the proposal for artoworks, main difference is path and GET with an id.

Current data model looks like:
* id
* title
* alt titles
* date
* artist
* creation location
* short desc

May be expanded or adjusted in the future.

## Test cURL Commands
All commands in this section have been tested with Windows Git Bash
Commands generated using `https://curlbuilder.com/`.
### User
GET: `curl -XGET 'http://localhost:4000/api/users/'`\
GET (with ID): `curl -XGET 'http://localhost:4000/api/users/:id'`\
POST: `curl -XPOST -H "Content-type: application/json" -d '{"username": "TestUsername20", "email": "TestEmail@email.com"}' 'http://localhost:4000/api/users/'`\
PATCH: `curl -XPATCH -H "Content-type: application/json" -d '{"username": "TestUsername20"}' 'http://localhost:4000/api/users/:id'`\
DELETE: `curl -XDELETE 'http://localhost:4000/api/users/:id'`
### Favourites
GET: `curl -XGET 'http://localhost:4000/api/favourites/?q=cow`\
GET (with ID): `curl -XGET 'http://localhost:4000/api/favourites/:id'`\
POST: `curl -XPOST -H "Content-type: application/json" -d '{"artist": "me", "title": "me when", "id": "24234"}' 'http://localhost:4000/api/favourites/'`\
PATCH:`curl -XPATCH -H "Content-type: application/json" -d '{"artist": "me"}' 'http://localhost:4000/api/favourites/:id'`\
DELETE: `curl -XDELETE 'http://localhost:4000/api/favourites/:id'`
### Artwork
GET: `curl -XGET 'http://localhost:4000/api/favourites/?q=hoku`\
GET (with ID) `curl -XGET 'http://localhost:4000/api/favourites/:id`:
