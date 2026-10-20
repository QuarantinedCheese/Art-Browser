// TODO: validation middleware (still need to figure out what this is for exactly)import { validateUserInput } from "../validators/user.js";

import { validateFavourites as checkFavourites } from "../validators/favourite.js";

export function validateFavourites() {
    return (req, res, next) => {
        const errors = checkFavourites(req.body);
        if (errors) {
            return res.status(400).json({ errors});

        }
        next();
    };
}