import User from '../models/user.js';

export async function findByEmail(email) {
  try {
    const foundUser = await User.findOne({
      where: {
        email,
      },
    });

    return foundUser;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function create(email, password) {
  const user = await new User({
    email,
    password,
  });

  try {
    const savedUser = await user.save();

    return savedUser;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
