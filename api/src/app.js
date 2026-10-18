// Creates the app and registers everything

import path from 'node:path';
import express from 'express';
// Remember to import the Routers here after implementing
// them, and uncomment the appropriate code
import { requestLogger } from './middleware/request-logger.js';
import { notFound } from './middleware/not-found.js';
import { errorHandler } from './middleware/error-handler.js';

import { usersRouter } from './routes/users.routes.js';

export const app = express();

// Express runs routes top to bottom, order matters
app.use(requestLogger);
app.use(express.json());
app.use(express.static(path.join(import.meta.dirname, '..', 'public')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});
// Placeholder routes, this is how Express knows what to do with each path
app.use('/api/users', usersRouter);
// app.use('/api/favourites', favsRouter);
// app.use('/api/artwork', artworkRouter);


// Must stay last
app.use(notFound); // Catches anything no route matches
app.use(errorHandler); // Catches errors