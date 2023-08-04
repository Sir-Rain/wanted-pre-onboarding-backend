import express from 'express';

import * as AuthController from './auth.js';
import * as ArticleController from './article.js';

export const router = express.Router();

router.get('/', (req, res) => {
  res.send('ok');
});

// users
router.post('/auth/signup', AuthController.signup);

// posts
router.get('/articles', ArticleController.getAll);
router.post('/article', ArticleController.create);
router
  .route('/article/:id')
  .get(ArticleController.getArtlcie)
  .put(ArticleController.updateArticle)
  .delete(ArticleController.deleteArticle);
