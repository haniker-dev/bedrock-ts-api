import express, { Express } from 'express';
import login from 'api/login';

const app: Express = express();
const port = process.env.PORT;

app.post('/login', login);

app.listen(port, () => {
  console.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});
