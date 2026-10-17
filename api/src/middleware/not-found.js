// If no route matches the request, produce an error message
export function notFound(req, res) {
    res.status(404).json({error: {message: `No route found for ${req.method} ${req.path} . Validate the path and try again.`}});
}