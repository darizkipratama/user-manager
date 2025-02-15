import { Request, Response, NextFunction } from 'express';
// import { verifyToken } from '../utils/authUtils'; // Assume you have a utility to verify tokens
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';


export const authMiddleware = (req: Request, res: Response, next: NextFunction):void => {
  const token = req.headers['authorization']?.split(' ')[1];
  const simpleToken = "$3cr3tT0k3n";
  if (!token) {
    res.status(401).json({ message: 'No token provided' });
  }

  if(token === simpleToken) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};