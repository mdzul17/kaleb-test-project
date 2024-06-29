import { HttpError } from './HttpError';

export class AuthenticationError extends HttpError {
  constructor(message: string) {
    super(message, 401);
  }
}
