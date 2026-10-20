// TODO: ensure favourite inputs and fully valid

export function validateFavourites(data) {
    const errors = {};

    if (typeof data.title !== "string" || !data.title.trim()) {
        errors.title = "Title is required.";
    }
    if (typeof data.artist !== "string" || !data.artist.trim()) {
        errors.artist = "Artist is required.";
    }
    if (typeof data.id !== "string" || !data.id.trim()) {
        errors.id = "Please input valid id.";
    }
    if (typeof data.favouritesId !== "string" || !data.favouritesId.trim()) {
        errors.favouritesId = "Invalid favourites ID.";
    }
    if (Object.keys(errors).length > 0) {
        return errors;
    }
    return null;
}


