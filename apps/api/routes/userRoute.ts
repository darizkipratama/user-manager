import express, { Router } from 'express';
import { UserController } from '../controller/userController';
import { UserRepository } from '../repository/userRepository';

const router: Router = express.Router();


router.get('/', (req, res, next) => {
    const userRepository = new UserRepository();
    const userControllers = new UserController(userRepository);
    userControllers.getAllUsers(req, res, next);
});

router.post('/', (req, res, next) => {
    const userRepository = new UserRepository();
    const userControllers = new UserController(userRepository);
    userControllers.createUser(req, res, next);
});


export const userRoutes = router;