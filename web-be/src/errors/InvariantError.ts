import { HttpError } from './HttpError';

export class InvariantError extends HttpError {
  constructor(message: string) {
    super(message, 400);
  }
}
