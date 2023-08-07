import express from 'express';

import * as AuthController from './auth.js';
import * as ArticleController from './article.js';

import checkAuth from '../middleware/auth-check.js';

export const router = express.Router();

router.get('/', (req, res) => {
  res.send('ok');
});

// users
router.post('/auth/signup', AuthController.signup);
router.post('/auth/signin', AuthController.signin);

// posts
router.get('/articles', ArticleController.getAll);
router.post('/article', checkAuth, ArticleController.create);
router
  .route('/article/:id')
  .get(ArticleController.getArtlcie)
  .put(checkAuth, ArticleController.updateArticle)
  .delete(checkAuth, ArticleController.deleteArticle);
