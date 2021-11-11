import express, { Request, Response } from 'express';
import { generateJWT } from '../utils/auth';
import { IAuthRequest } from './types';
import alert from 'alert';

const path = require('path');
const auth = express.Router();

auth.get('/login', (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, '..', 'frontend/login.html'))
);

// phase 1: no actual auth logic yet
auth.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body as IAuthRequest;

  if (!username || !password) {
    alert('Invalid request');
    res.redirect('../authenticate/login');
    res
      .status(400)
      .send({ status: 'failed', description: 'Invalid request' })
      .end();
  }

  if (username !== 'ocbc' || password !== '123456') {
    alert('Invalid username or password');
    res.redirect('../authenticate/login');
    res
      .status(403)
      .send({ status: 'failed', description: 'Invalid username or password' })
      .end();
  }

  const token = generateJWT({ username });
  res.redirect('../account/balances');
  res.status(200).send({ status: 'success', token }).end();
});

export default auth;
