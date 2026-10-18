// TODO: ensure user inputs and fully valid

export function validateUserInput(body, { partial = false } = {}) {
    if (typeof body !== 'object' || body == null || Array.isArray(body)) {
        return { value: {}, errors: { body: 'Send a JSON objects' } };
    }

    const value = {}
    const errors = {}
    const shouldCheck = (field) => !partial || body[field] !== undefined;


    if (shouldCheck('username')) {
        // First verify that username is a string.
        // If not a string, set it to a blank string and use that.
        const username = typeof body.username == 'string' ? body.username.trim() : '';
        if (5 > username.length || username.length > 30) {
            errors.username = 'Username must be 5-30 characters.';
        } else {
            value.username = username;
        }
    }


    if (shouldCheck('email')) {
        // Regex taken via https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
        const re = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
        if (re.test(body.email)) { // Tests email against the regex
            value.email = body.email
        } else {
            errors.email = 'Email format invalid.'
        }
    }

    return {value, errors}
}