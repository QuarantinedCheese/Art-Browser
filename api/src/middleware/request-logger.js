// This function logs requests as they come in, allows us to understand what is happening
// eg. GET  /api/users  200  4ms
export function requestLogger(req, res, next) {
    const started = performance.now(); // performance.now gets the current time from origin
    res.on('finish', () => {
        const ms = Math.round(performance.now() - started);
        console.log(`${req.method}  ${req.originalUrl}  ${res.statusCode}  ${ms}ms`);
    });
    next();
}