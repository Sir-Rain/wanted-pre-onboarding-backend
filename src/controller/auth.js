import c from 'config';
import * as AuthService from '../service/auth.js';

export async function signup(req, res) {
  try {
    const savedUser = await AuthService.signup(req.body);

    res.status(201).json({
      message: 'Success',
      userId: savedUser.id,
    });
  } catch (err) {
    const code = err.code || 500;
    const message = err.message;

    res.status(code).json({
      message,
    });
  }
}

export async function signin(req, res) {
  try {
    const token = await AuthService.signin(req.body);

    res.cookie('token', token);
    res.status(200).json({
      message: 'Success',
      token: token,
    });
  } catch (err) {
    const code = err.code || 500;
    const message = err.message;

    res.status(code).json({ message });
  }
}
