import Article from '../models/article.js';

export async function create(req, res) {
  const { title, content } = req.body;

  const article = new Article({
    title,
    content,
  });

  await article.save();

  res.json({ message: 'OK' });
}

export function getAll(req, res) {
  const pages = req.query.pages || 1;

  const articles = [
    {
      title: 'hello',
      content: 'world',
    },
  ];

  res.stauts(200).json({
    message: 'OK!',
    articles,
  });
}
