import { Request, Response, NextFunction } from 'express';
// import { verifyToken } from '../utils/authUtils'; // Assume you have a utility to verify tokens

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];
  const simpleToken = "$3cr3tT0k3n";
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  if(token === simpleToken) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};