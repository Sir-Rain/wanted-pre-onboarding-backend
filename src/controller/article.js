import Article from '../models/article.js';

import * as ArticleService from '../service/article.js';

export async function create(req, res) {
  const { title, content } = req.body;

  const userId = 1;

  const article = new Article({
    title,
    content,
    userId,
  });

  const savedArticle = await article.save();

  res.json({ message: 'Article Created', articleId: savedArticle.id });
}

export async function getAll(req, res) {
  try {
    const articles = await ArticleService.getAll(req.query);

    res.status(200).json({
      message: 'Success',
      articles,
    });
  } catch (err) {}
}

export async function getArtlcie(req, res) {
  try {
    const article = await ArticleService.getArticle(req.params);

    res.status(200).json({
      message: 'Success',
      article,
    });
  } catch (err) {
    const code = err.code || 500;
    const message = err.message;

    res.status(code).json({
      message: message,
    });
  }
}

export async function updateArticle(req, res) {
  try {
    const updatedArticle = await ArticleService.updateArticle(req.body);

    res.status(200).json({
      message: 'updated!',
      article: updatedArticle,
    });
  } catch (err) {
    const code = err.code || 500;
    const message = err.message;

    res.status(code).json({
      message: message,
    });
  }
}

export async function deleteArticle(req, res) {
  const id = req.params.id;

  const result = await Article.destroy({ where: { id } });

  console.log(result);

  res.json({
    message: 'Deleted',
  });
}
