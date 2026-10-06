**Problem and users**
We want to provide a way for users to navigate the Art Institute of Chicago's art catalogue with ease. We plan to make it possible for users to find an artwork they enjoy, and leave themselves notes for future reference.

**Features**
* Sorting
* Browse
* Favourites/saved
  * Saving a work
  * Removing a saved work
* Notes on works
* Filtering

**External API**
https://api.artic.edu/docs/#introduction
Used to access library of works

**Data Model Draft**
User: name, email, date, id
Artworks: id, title, alt titles, date, artist, creation location, short description,
Favourites: id, title, alt titles, date, artist, creation location, short description, notes

**Endpoint list**
|Method|Path                       |Operation                           |Success code(s)|Error code(s)                   |
|------|---------------------------|------------------------------------|---------------|--------------------------------|
|GET   |/api/artworks/search       |Search Artworks via Institute API   |200 OK         |400 Bad Request, 502 Bad Gateway|
|GET   |/api/user/favourites/list  |Lists out all works saved by user   |200 OK         |400 Bad Request, 502 Bad Gateway|
|DELETE|/api/user/favourites/remove|Removes an item from favourites list|204 OK         |400 Bad Request, 502 Bad Gateway|

**Wireframes**

**Team Roles**
* Front-End lead: Autumn
* API lead: Ethan
* Database lead: Kristine

