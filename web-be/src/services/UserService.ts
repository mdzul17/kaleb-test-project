import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { UserRepository } from '../repositories/UserRepository';
import { LoginResponse, RegisterUser } from '../models/User';
import { InvariantError } from '../errors/InvariantError';
import { AuthenticationError } from '../errors/AuthenticationError';

export class UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
      this.userRepository = userRepository;
    }

  async register(user: RegisterUser): Promise<void> {
    const existingUser = await this.userRepository.findByUsername(user.username);
    if (existingUser) {
      throw new InvariantError('Username already taken');
    }
    await this.userRepository.create(user);
  }

  async login(username: string, password: string): Promise<LoginResponse> {
    const user = await this.userRepository.findByUsername(username);
    if (!user) {
      throw new AuthenticationError('Username or password is wrong!');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new AuthenticationError('Username or password is wrong!');
    }
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });

    const data = {
      name: user.name,
      token: token
    }

    return data;
  }
}
