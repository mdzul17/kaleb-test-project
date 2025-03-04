import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { HttpError } from "../errors/HttpError";
import { UserRepository } from "../repositories/UserRepository";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
      this.userService = userService;
    }

    async register(req: Request, res: Response): Promise<void> {
        try {
            await userService.register(req.body);
            res.status(201).json({
                status: "success",
                message: "User registered successfully",
            });
        } catch (error: any) {
            console.error(error)
            if (error instanceof HttpError) {
                res.status(error.statusCode).json({
                    status: "failed",
                    message: error.message,
                });
            } else {
                res.status(500).json({
                    status: "failed",
                    message: "Internal Server Error",
                });
            }
        }
    }
}
