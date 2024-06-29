import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { HttpError } from "../errors/HttpError";
import { UserRepository } from "../repositories/UserRepository";
import { LoginResponse } from "../models/User";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

export class AuthenticationController {
    private userService: UserService;

    constructor(userService: UserService) {
      this.userService = userService;
    }

    async login(req: Request, res: Response): Promise<void> {
        try {
            const { username, password } = req.body
            const data = await userService.login(
                username,
                password
            );
            res.status(200).json({
                status: "success",
                data: { 
                    username: username,
                    name: data.name,
                    token: data.token
                 },
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
