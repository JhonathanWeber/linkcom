import { Request, Response } from 'express';
import { IUserController } from './userController-interface';
import { IUserService } from '../services/userService-Interface';
import { createUserValidator } from '../utils/createUserValidator';

export class UserController implements IUserController {
    constructor(private userService: IUserService) { }

    async getAll(req: Request, res: Response): Promise<void> {
        try {

            const users = await this.userService.getAll()
            res.status(200).json(users);
        } catch (error: any) {
            res.status(500).json(error)
        }
    }
    async getByEmail(req: Request, res: Response): Promise<void> {
        try {
            const { email } = req.query
            const user = await this.userService.getByEmail(email as string)
            res.status(200).json(user)
        } catch (error: any) {
            res.status(500).json(error)

        }
    }
    async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const user = await this.userService.getById(id)
            res.status(200).json(user)
        } catch (error: any) {
            res.status(500).json(error)

        }
    }


    async create(req: Request, res: Response): Promise<void> {
        try {
            const { body } = req;
            console.log(body, { 'body': 'body' })
            await createUserValidator.validate(body, { abortEarly: false })
            const user = await this.userService.create(body)
            console.log(user)
            res.status(201).json(user)
        } catch (error: any) {
            res.status(500).json(error)

        }
    }


    async update(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const { body } = req
            const updateUser = await this.userService.update(id, body)
            res.status(200).json(updateUser)

        } catch (error: any) {
            res.status(500).json(error)

        }
    }
    async softDelete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const deleteUser = await this.userService.softDelete(id)
            res.status(200).json(deleteUser)
        } catch (error: any) {
            res.status(500).json(error)

        }
    }
}