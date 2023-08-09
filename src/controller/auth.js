import * as AuthService from '../service/auth.js';

export async function signup(req, res, next) {
  try {
    const savedUser = await AuthService.signup(req.body);

    res.status(201).json({
      message: 'Success',
      userId: savedUser.id,
    });
  } catch (err) {
    next(err);
  }
}

export async function signin(req, res, next) {
  try {
    const token = await AuthService.signin(req.body);

    res.cookie('token', token);
    res.status(200).json({
      message: 'Success',
      token: token,
    });
  } catch (err) {
    next(err);
  }
}
