import express, { Request, Response } from 'express';

const root = express.Router();
const path = require('path');

root.get('/', (req: Request, res: Response) =>
  res.status(200).send({
    status: 'success',
    description: 'Server running well!',
    availableRoutes: [
      '/authenticate/login',
      '/account/balances',
      '/account/transactions',
      '/account/payees',
      '/transfer',
    ],
  })
);

export default root;
