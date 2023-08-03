export function getAll(req, res) {
  const pages = req.query.pages || 1;

  const posts = [
    {
      title: 'hello',
      content: 'world',
    },
  ];

  res.stauts(200).json({
    message: 'OK!',
    posts,
  });
}
