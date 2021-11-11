import express, { Request, Response } from 'express';
import { authChecker } from '../middlewares';
import { generateUUID4 } from '../utils/generator';
import { ITransferRequest } from './types';
import alert from 'alert';

const path = require('path');
const transferRouter = express.Router();

transferRouter.get('/', (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, '..', 'frontend/transfer.html'))
);

// PHASE 1: simply validate and return hardcoded resp
transferRouter.post('/', authChecker, (req, res) => {
  const { recipientAccountNo, amount, date, description } =
    req.body as ITransferRequest;

  // TODO: use a validator package to validate body schema
  if (!recipientAccountNo || !amount || !date || !description) {
    alert('Invalid request');
    res.redirect('../transfer');
    res
      .status(400)
      .send({
        status: 'failed',
        description: 'Invalid request',
      })
      .end();
  }

  alert('Transfer succcessful');
  res
    .status(200)
    .send({
      status: 'success',
      data: {
        id: generateUUID4(),
        ...req.body,
      },
    })
    .end();
});

export default transferRouter;
