// TODO: should store data about favourites

import { randomUUID } from 'node:crypto';
//data from: https://raw.githubusercontent.com/art-institute-of-chicago/api-data/refs/heads/main/getting-started/allArtworks.jsonl
const favourites = [
    { 
        favouritesId: '85f380f1-ae41-4a06-9158-1747629bca6a',
        id: '27992',
        title: 'A Sunday on La Grande Jatte',
        artist: 'Georges Seurat'
    },
    {
        favouritesId: '083c140e-d473-4a21-aefa-68186715fdac',
        id: '28401',
        title: 'The Cowherd',
        artist: 'Claude Lorrain'
    },
    {
        favouritesId: 'e41dc261-723a-416b-96e8-dacd351f4685',
        id: '28412',
        title: 'The Apse of Notre-Dame, Paris',
        artist: 'Ferdinand Jules Albert Gosselin'
    },
    {
        favouritesId: '1b025d74-0f4a-4081-8bf3-0b1b12073646',
        id: '27947',
        title: 'The Queen of Sheba Walking on the Waters',
        artist: 'Georges Reverdy'
    },
    {
        favouritesId: '2890c6e2-2be9-4141-bd91-cf162414f71d',
        id: '28199',
        title: 'Portrait of Titian',
        artist: 'Agostino Carracci'
    },
    {
        favouritesId: 'ef250383-2a2e-46e9-bebf-c356ad62af43',
        id: '28207',
        title: 'Landscape',
        artist: 'Oguri Sotan'
    },
    {
        favouritesId: '223e3a4a-3644-4758-a185-300e4ffcfa65',
        id: '28442',
        title: 'Composition',
        artist: 'Serge Poliakoff'
    }
] // temp data, may be more or less detailed in the future

//following functions follow CRUD
//Create
export function createFavourite(artwork) {
    const newFavourite = {
        favouritesId: randomUUID(), ...artwork
    };

    favourites.push(newFavourite);
    return newFavourite;
}
//Read
export function findFavourites({ q } = {}){
    let results = favourites
    if (q) {
        const search = q.toLowercase();
        results = results.filter((favourite) => (favourite.title.toLowerCase().includes(search)))
    }
    return results;
    // May need to be expanded to include genre filtering in the future
}

export function findFavouriteById(favouritesId) {
    return favourites.find(
        favourite => favourite.favouritesId === favouritesId
    );
}
//Update
export function updateFavourites(favouritesId, updates) {
    const favourite = getFavouriteById(favouritesId);

    if(favourite) {
        Object.assign(favourite, updates);
    }

    return favourite;

}

//Delete
export function deleteFavourite(favouritesId) {
    const index = favourites.findIndex(
        favourite => favourite.favouritesId === favouritesId
    );

    if (index === -1) {return false;}

    favourites.splice(index, 1);
    return true;
}


