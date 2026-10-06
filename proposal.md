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

*Later List*
* Custom collections

**External API**
https://api.artic.edu/docs/#introduction
Used to access library of works

No key required, however it will be limited to 60 requests per minute.
Example request: https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id
```
{"data":{"id":27992,"title":"A Sunday on La Grande Jatte \u2014 1884","image_id":"2d484387-2509-5e8e-2c43-22f9981972eb"},"info":{"license_text":"The `description` field in this response is licensed under a Creative Commons Attribution 4.0 Generic License (CC-By) and the Terms and Conditions of artic.edu. All other data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu.","license_links":["https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/","https:\/\/www.artic.edu\/terms"],"version":"1.16"},"config":{"iiif_url":"https:\/\/www.artic.edu\/iiif\/2","website_url":"http:\/\/www.artic.edu"}}

```

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

