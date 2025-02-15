import { Request, Response, NextFunction } from 'express';
import { UserRepository as repo } from '../repository/userRepository';
import { User as UserModel } from '@repo/models/src/user';

export class UserController {
    private userRepository: repo;
  
    constructor(userRepository: repo) {
        this.userRepository = userRepository;
        
    }
  
    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.userRepository.getAllUsers();
            res.json(users);
        } catch (error) {
            next(error);
        } 
    }
    
    async createUser(req: Request, res: Response, next: NextFunction) {
        try{
            let newUser:UserModel = req.body;
            const createdUser = await this.userRepository.createUser(newUser);
            res.status(201).json(createdUser);
        } catch (error) {
            next(error);
        }
    }

    async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            let updatedUser:UserModel = req.body;
            const result = await this.userRepository.updateUser(updatedUser);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

  }