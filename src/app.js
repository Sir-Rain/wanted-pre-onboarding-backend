import express from 'express';

import { router } from './controller/index.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
