import * as ArticleRepository from '../repository/article.js';

export async function getAll(userInput) {
  const LIMIT = 2;

  const inputPage = userInput.page || 1;
  const offset = (inputPage - 1) * LIMIT;

  return ArticleRepository.findAll(offset, LIMIT);
}
