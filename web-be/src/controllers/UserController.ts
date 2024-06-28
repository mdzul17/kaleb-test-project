import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

const userService = new UserService();

export class UserController {
  async register(req: Request, res: Response): Promise<void> {
    try {
      await userService.register(req.body);
      res.status(201).send('User registered successfully');
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const token = await userService.login(req.body.username, req.body.password);
      res.status(200).json({ token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
