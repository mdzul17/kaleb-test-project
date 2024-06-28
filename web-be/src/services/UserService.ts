import { UserRepository } from '../repositories/UserRepository';
import { User } from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export class UserService {
  private userRepository = new UserRepository();

  async register(user: User): Promise<void> {
    const existingUser = await this.userRepository.findByUsername(user.username);
    if (existingUser) {
      throw new Error('Username already taken');
    }
    await this.userRepository.create(user);
  }

  async login(username: string, password: string): Promise<string> {
    const user = await this.userRepository.findByUsername(username);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });
    return token;
  }
}
