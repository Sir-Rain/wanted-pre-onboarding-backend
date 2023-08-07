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
