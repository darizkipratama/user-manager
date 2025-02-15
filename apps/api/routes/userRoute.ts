import express, { Router } from 'express';
import { UserController } from '../controller/userController';
import { UserRepository } from '../repository/userRepository';
import { authMiddleware } from '../middleware/authMiddleware';

const router: Router = express.Router();


router.get('/', authMiddleware, (req, res, next) => {
    const userRepository = new UserRepository();
    const userControllers = new UserController(userRepository);
    userControllers.getAllUsers(req, res, next);
});

router.post('/', authMiddleware, (req, res, next) => {
    const userRepository = new UserRepository();
    const userControllers = new UserController(userRepository);
    userControllers.createUser(req, res, next);
});

router.post('/update', authMiddleware, (req, res, next) => {
    const userRepository = new UserRepository();
    const userControllers = new UserController(userRepository);
    userControllers.updateUser(req, res, next);
});


export const userRoutes = router;