// Starts the app
import { app } from './app.js';

const port = process.env.PORT ?? 4000;

app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log(`API running at http://localhost:${port}`);
});