import pool from '../utils/db';
import { RegisterUser, LoginUser } from '../models/User';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

export class UserRepository {
  async create(user: RegisterUser): Promise<void> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const id = uuidv4();
    await pool.query(
      'INSERT INTO users (id, username, password, name) VALUES ($1, $2, $3, $4)',
      [id, user.username, hashedPassword, user.name]
    );
  }

  async findByUsername(username: string): Promise<LoginUser | null> {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (result.rows.length > 0) {
      return result.rows[0];
    }
    return null;
  }
}
