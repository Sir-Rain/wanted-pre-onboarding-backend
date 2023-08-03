import express from 'express';
import * as PostController from './posts.js';

export const router = express.Router();

router.get('/', (req, res) => {
  res.send('ok');
});

// posts
router.get('/posts', PostController.getAll);
