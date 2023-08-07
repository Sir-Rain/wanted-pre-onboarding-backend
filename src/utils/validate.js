import { AppError } from './errors';

export function checkInputArticleId(articleId) {
  if (!articleId) {
    throw new AppError('BadInput');
  }

  const toNumberArticleId = +articleId;

  if (isNaN(toNumberArticleId)) {
    throw new AppError('BadInput');
  }

  if (toNumberArticleId < 1) {
    throw new AppError('BadInput');
  }
}
