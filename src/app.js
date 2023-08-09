import express from 'express';

import { router } from './controller/index.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found EndPoint' });
});
