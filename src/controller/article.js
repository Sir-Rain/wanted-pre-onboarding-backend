import * as ArticleService from '../service/article.js';

export async function create(req, res) {
  try {
    const savedArticle = await ArticleService.create(req);

    res.json({ message: 'Article Created', articleId: savedArticle.id });
  } catch (err) {}
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
    const updatedArticle = await ArticleService.updateArticle(req);

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
  try {
    const articleId = await ArticleService.deleteArticle(req);

    res.json({
      message: 'Deleted',
      articleId,
    });
  } catch (err) {
    const code = err.code || 500;
    const message = err.message;

    res.status(code).json({
      message: message,
    });
  }
}
