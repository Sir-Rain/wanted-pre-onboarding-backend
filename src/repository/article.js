import Article from '../models/article.js';

export async function save({ title, content, userId }) {
  try {
    const article = new Article({
      title,
      content,
      userId,
    });

    const savedArticle = await article.save();

    return savedArticle;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

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
