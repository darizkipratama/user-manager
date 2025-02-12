import { Request, Response, NextFunction } from 'express';
// import { verifyToken } from '../utils/authUtils'; // Assume you have a utility to verify tokens

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // const decoded = verifyToken(token); // Verify the token
    // req.user = decoded; // Attach the decoded user to the request object
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};