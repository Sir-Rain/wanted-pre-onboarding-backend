import * as ArticleRepository from '../repository/article.js';
import { AppError } from '../utils/errors.js';
import * as Validate from '../utils/validate.js';

export async function create(req) {
  const userId = req.userId;

  const { title, content } = req.body;

  if (!title || !content) {
    throw new AppError('BadInput');
  }

  const userInput = {
    title,
    content,
    userId,
  };

  try {
    const savedArticle = await ArticleRepository.save(userInput);

    return savedArticle;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getAll(userInput) {
  const LIMIT = 2;

  const inputPage = userInput.page || 1;
  const offset = (inputPage - 1) * LIMIT;

  return ArticleRepository.findAll(offset, LIMIT);
}

export async function getArticle(userInput) {
  const articleId = userInput.id;

  Validate.checkInputArticleId(articleId);

  const article = await ArticleRepository.findById(articleId);

  if (!article) {
    // Not Found
    throw new AppError('NotFound');
  }

  return article;
}

export async function updateArticle(req) {
  const userId = req.userId;

  const { id: articleId } = req.params;

  Validate.checkInputArticleId(articleId);

  try {
    const article = await ArticleRepository.findById(articleId);

    if (!article) {
      throw new AppError('NotFound');
    }

    const articlesUserId = article.userId;
    if (userId !== articlesUserId) {
      throw new AppError('Forbidden');
    }

    const { title, content } = req.body;

    if (title) {
      article.title = title;
    }
    if (content) {
      article.content = content;
    }

    const updatedArticle = await article.save();

    return updatedArticle;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function deleteArticle(req) {
  const userId = req.userId;

  const { id: articleId } = req.params;

  Validate.checkInputArticleId(articleId);

  const article = await ArticleRepository.findById(articleId);

  if (!article) {
    throw new AppError('NotFound');
  }

  const articlesUserId = article.userId;
  if (userId !== articlesUserId) {
    throw new AppError('Forbidden');
  }

  await article.destroy();

  return articleId;
}
