// TODO: ensure favourite inputs and fully valid

export function validateFavourites(body, {partial = false} = {}) {
    const errors = {};
    const values = {};
    const shouldCheck = (field) => !partial || body[field] !== undefined;

    if (shouldCheck('title')) {
        const title = typeof body.title === 'string' ? body.title.trim() : '';
        if (title.length <= 0) {
            errors.title = 'Title must be at least one character';
        } else {
            values.title = title;
        }
    }

    if (shouldCheck('artist')) {
        const artist = typeof body.artist === 'string' ? body.artist.trim() : '';
        if (artist.length <= 0) {
            errors.artist = 'Artist name must be at least one character';
        } else {
            values.artist = artist;
        }
    }

    if (!partial) {
        const instituteId = body.id;
        if (!instituteId) {
            errors.id = 'The artwork\'s Institute ID must exist.';
        } else {
            values.id = instituteId;
        }
    }

    if (partial && Object.keys(values).length === 0 && Object.keys(errors).length === 0) {
        errors.body = 'Pass at least one field to change.';
    }

    console.log(values)
    return {values, errors};
}


