// Creates the app and registers everything

import path from 'node:path';
import express from 'express';
import { eventsRouter } from './routes/events.routes.js';
import { requestLogger } from './middleware/request-logger.js';
import { notFound } from './middleware/not-found.js';
import { errorHandler } from './middleware/error-handler.js';

export const app = express();

// Express runs routes top to bottom, order matters
app.use(requestLogger);
app.use(express.json());
app.use(express.static(path.join(import.meta.dirname, '..', 'public')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});
app.use('/api/events', eventsRouter);


// Must stay last
app.use(notFound); // Catches anything no route matches
app.use(errorHandler); // Catches errors