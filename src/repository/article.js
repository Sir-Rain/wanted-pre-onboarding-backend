import Article from '../models/article.js';

export async function findAll(offset, limit) {
  try {
    const articles = await Article.findAll({
      attributes: ['id', 'title', 'content'],
      offset,
      limit,
    });

    return articles;
  } catch (err) {
    console.error(err);
  }
}

export async function findById(articleId) {
  try {
    const article = await Article.findByPk(articleId);

    return article;
  } catch (err) {}
}
