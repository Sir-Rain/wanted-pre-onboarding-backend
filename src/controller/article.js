import * as ArticleService from '../service/article.js';

export async function create(req, res) {
  try {
    const savedArticle = await ArticleService.create(req);

    res.json({ message: 'Article Created', articleId: savedArticle.id });
  } catch (err) {
    next(err);
  }
}

export async function getAll(req, res) {
  try {
    const articles = await ArticleService.getAll(req.query);

    res.status(200).json({
      message: 'Success',
      articles,
    });
  } catch (err) {
    next(err);
  }
}

export async function getArtlcie(req, res) {
  try {
    const article = await ArticleService.getArticle(req.params);

    res.status(200).json({
      message: 'Success',
      article,
    });
  } catch (err) {
    next(err);
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
    next(err);
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
    next(err);
  }
}
