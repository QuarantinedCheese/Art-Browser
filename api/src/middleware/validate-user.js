import { validateUserInput } from "../validators/user.js";
import { HttpError } from "../utils/http-error.js";

// Returns middleware so routes can choose mode
// validateUser() for POST
// validateUser({ partial = false }) for PATCH.
export function validateUser({ partial = false } = {}) {
    return (req, res, next) => {
        const {value, errors} = validateUserInput(req.body, { partial });
        if (Object.keys(errors).length > 0) {
            throw new HttpError(400, 'Validation failed', errors);
        }
        req.body = value;
        next();
    };
}