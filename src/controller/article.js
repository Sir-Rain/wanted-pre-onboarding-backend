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
  const page = req.query.page || 1;

  const articles = await Article.findAll({
    attributes: ['id', 'title', 'content'],
  });

  res.status(200).json({
    message: 'Success',
    articles,
  });
}

export async function getArtlcie(req, res) {
  const id = req.params.id;

  const article = await Article.findOne({ where: { id } });

  res.json({
    message: 'Success',
    article,
  });
}

export async function updateArticle(req, res) {
  const id = req.params.id;

  const article = await Article.findOne({ where: { id } });

  const { title, content } = req.body;

  if (title) {
    article.title = title;
  }
  if (content) {
    article.content = content;
  }

  const updatedArticle = await article.save();

  res.json({
    message: 'updated!',
    article: updatedArticle,
  });
}

export async function deleteArticle(req, res) {
  const id = req.params.id;

  const result = await Article.destroy({ where: { id } });

  console.log(result);

  res.json({
    message: 'Deleted',
  });
}
