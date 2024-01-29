import { Request, Response } from 'express'
import { IAuthService } from "../service/authService-Interface";
import { authBodyValidator } from "../utils/authBodyValidator";
import { IAuthController } from "./authController-Interface";

export class AuthController implements IAuthController {
    constructor(private authService: IAuthService) { }

    async login(req: Request, res: Response): Promise<void> {
        try {
            const { body } = req
            await authBodyValidator.validate(body, { abortEarly: false })
            const token = await this.authService.login(body)
            res.status(200).json(token)
        } catch (error: any) {
            res.status(500).json(error)
        }
    }
}