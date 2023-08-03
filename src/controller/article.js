import Article from '../models/article.js';

export async function create(req, res) {
  const { title, content } = req.body;

  const article = new Article({
    title,
    content,
  });

  const savedArticle = await article.save();

  res.json({ message: 'Article Created', articleId: savedArticle.id });
}

export async function getAll(req, res) {
  const pages = req.query.pages || 1;

  const articles = await Article.findAll({ attributes: ['title', 'content'] });

  res.status(200).json({
    message: 'Success',
    articles,
  });
}
