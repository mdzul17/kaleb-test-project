import { Router } from 'express';
import { AuthenticationController } from '../controllers/AuthenticationController';
import { UserService } from '../services/UserService';
import { UserRepository } from '../repositories/UserRepository';

const router = Router();
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const authenticationController = new AuthenticationController(userService);

router.post('/login', authenticationController.login);

export default router;
