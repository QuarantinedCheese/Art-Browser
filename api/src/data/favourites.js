// TODO: should store data about favourites

import { randomUUID } from 'node:crypto';
//data from: https://raw.githubusercontent.com/art-institute-of-chicago/api-data/refs/heads/main/getting-started/allArtworks.jsonl
const favourites = [
    { 
        favouritesId: '1',
        id: '27992',
        title: 'A Sunday on La Grande Jatte',
        artist: 'Georges Seurat'
    },
    {
        favouritesId: '2',
        id: '28401',
        title: 'The Cowherd',
        artist: 'Claude Lorrain'
    },
    {
        favouritesId: '3',
        id: '28412',
        title: 'The Apse of Notre-Dame, Paris',
        artist: 'Ferdinand Jules Albert Gosselin'
    },
    {
        favouritesId: '4',
        id: '27947',
        title: 'The Queen of Sheba Walking on the Waters',
        artist: 'Georges Reverdy'
    },
    {
        favouritesId: '5',
        id: '28199',
        title: 'Portrait of Titian',
        artist: 'Agostino Carracci'
    },
    {
        favouritesId: '6',
        id: '28207',
        title: 'Landscape',
        artist: 'Oguri Sotan'
    },
    {
        favouritesId: '7',
        id: '28442',
        title: 'Composition',
        artist: 'Serge Poliakoff'
    }
]

//following functions follow CRUD
//Create
export function createFavourite(artwork) {
    const newFavourite = {
        favouritesId: randomUUID(),
        id: artwork.id,
        title: artwork.title,
        artist: artwork.artist
    };

    favourites.push(newFavourite);
    return newFavourite;
}
//Read
export function getAllFavourites(){
    return favourites;
}

export function getFavouriteById(favouritesId) {
    return favourites.find(
        favourite => favourite.favouritesId === favouritesId
    );
}
//Update
export function updateFavourites(favouritesId, updates) {
    const favourite = getFavouriteById(favouritesId);

    if(!favourite) return null;

    Object.assign(favourite, updates);
    return favourite;

}

//Delete
export function deleteFavourite(favouritesId) {
    const index = favourites.findIndex(
        favourite => favourite.favouritesId === favouritesId
    );

    if (index === -1) return null;

    return favourites.splice(index, 1) [0]
}


