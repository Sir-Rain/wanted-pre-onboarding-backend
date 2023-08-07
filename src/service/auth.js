import config from 'config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import * as AuthRepository from '../repository/auth.js';

import * as Validate from '../utils/validate.js';
import { AppError } from '../utils/errors.js';

const SECERT_KEY = config.get('secretKey');

export async function signup(userInput) {
  const { email, password } = userInput;

  Validate.checkEmail(email);

  Validate.checkPassword(password);

  try {
    const existsUser = await AuthRepository.findByEmail(email);

    if (existsUser) {
      throw new AppError('DuplicateUser');
    }

    const hashedPwd = await bcrypt.hash(password, 12);

    const savedUser = await AuthRepository.create(email, hashedPwd);

    return savedUser;
  } catch (err) {
    throw err;
  }
}

export async function signin(userInput) {
  const { email, password } = userInput;

  Validate.checkEmail(email);
  Validate.checkPassword(password);

  const foundUser = await AuthRepository.findByEmail(email);

  if (!foundUser) {
    throw new AppError('NotFound');
  }

  const {
    password: userPassword,
    email: userEmail,
    id: id,
  } = foundUser.dataValues;

  const isPasswordSame = await bcrypt.compare(password, userPassword);

  if (!isPasswordSame) {
    throw new AppError('BadInput');
  }

  const token = jwt.sign({ id, email: userEmail }, SECERT_KEY, {
    expiresIn: '1h',
  });

  return token;
}
