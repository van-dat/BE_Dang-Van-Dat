import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.sendStatus(401); 
    return;
  }

  jwt.verify(token, 'SECRET_KEY', (err, user) => {
    if (err) {
      res.sendStatus(403); 
      return; 
    }
    (req as any).user = user;
    next();
  });
};