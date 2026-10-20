// TODO: validation middleware (still need to figure out what this is for exactly)import { validateUserInput } from "../validators/user.js";

import { HttpError } from "../utils/http-error.js";
import { validateFavourites as checkFavourites } from "../validators/favourite.js";

export function validateFavourites({ partial = false } = {}) {
    return (req, res, next) => {
        const {values, errors} = checkFavourites(req.body, { partial });
        if (Object.keys(errors).length > 0) {
            throw new HttpError(400, 'Validation failed', errors);
        }
        req.body=values;
        next();
    };
}