import e from 'express';
import * as ArticleRepository from '../repository/article.js';
import * as Validate from '../utils/validate.js';

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
  }

  return article;
}
