export function checkInputArticleId(articleId) {
  if (!articleId) {
    throw new Error('article id undefined');
  }

  const toNumberArticleId = +articleId;

  if (isNaN(toNumberArticleId)) {
    throw new Error('article id must be number type');
  }

  if (toNumberArticleId < 1) {
    throw new Error('article id must be over 0');
  }
}
