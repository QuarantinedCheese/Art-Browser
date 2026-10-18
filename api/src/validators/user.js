// TODO: ensure user inputs and fully valid

export function validateUserInput(body, { partial = false } = {}) {
    if (typeof body !== 'object' || body == null || Array.isArray(body)) {
        return { value: {}, errors: { body: 'Send a JSON objects' } };
    }

    const value = {}
    const errors = {}
    const shouldCheck = (field) => !partial || body[field] !== undefined;


    if (shouldCheck('username')) {
        // TODO: validate that username works
        const username = typeof body.username == 'string' ? body.title.trim() : '';
    }


    if (shouldCheck('name')) {
        // TODO: validate that name works
    }


    if (shouldCheck('email')) {
        // TODO: validate that email works
    }
}