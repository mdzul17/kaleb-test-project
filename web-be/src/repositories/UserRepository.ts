import pool from '../utils/db';
import { User } from '../models/User';
import bcrypt from 'bcryptjs';

export class UserRepository {
  async create(user: User): Promise<void> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2)',
      [user.username, hashedPassword]
    );
  }

  async findByUsername(username: string): Promise<User | null> {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (result.rows.length > 0) {
      return result.rows[0];
    }
    return null;
  }
}
