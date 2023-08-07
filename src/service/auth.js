import config from 'config';

import * as AuthRepository from '../repository/auth.js';

import * as Validate from '../utils/validate.js';

import bcrypt from 'bcrypt';
import { AppError } from '../utils/errors.js';

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
