import jwt from 'jsonwebtoken';
import config from 'config';

import * as AuthRepository from '../repository/auth.js';
import { AppError } from '../utils/errors.js';

const SECERT_KEY = config.get('secretKey');

export default async function checkAuth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new AppError('NotAuth');
  }

  const [, token] = authorization.split('Bearer ');

  if (!token) {
    throw new AppError('NotAuth');
  }

  try {
    const payload = await jwt.verify(token, SECERT_KEY);

    const { id, email } = payload;

    const foundUser = await AuthRepository.findById(id);

    if (!foundUser) {
      throw new AppError('NotAuth');
    }

    const { id: userId, email: userEmail } = foundUser.dataValues;

    req.userId = userId;
    req.userEmail = userEmail;

    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
}
