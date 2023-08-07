import { AppError } from './errors.js';

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

export function checkEmail(email) {
  if (!email) {
    throw new AppError('BadInput');
  }

  const emailRegex = new RegExp(
    /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    'g',
  );

  if (!emailRegex.test(email)) {
    throw new AppError('BadInput');
  }
}

export function checkPassword(password) {
  if (!password) {
    throw new AppError('BadInput');
  }

  const pwLength = password.length;

  if (pwLength < 8) {
    throw new AppError('BadInput');
  }
}
