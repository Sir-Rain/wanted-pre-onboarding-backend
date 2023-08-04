import User from '../models/user.js';

export async function signup(req, res) {
  const { email, password } = req.body;

  const user = new User({
    email,
    password,
  });

  const savedUser = await user.save();

  res.json({
    message: 'Success',
    userId: savedUser.id,
  });
}
