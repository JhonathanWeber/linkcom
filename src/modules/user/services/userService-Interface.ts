import { CreateUserDTO } from "../dtos/createUserDTO";
import { UpdateUserDTO } from "../dtos/updateUserDTO";
import { User } from "../models/userModel";


export interface IUserService {
    getAll(): Promise<Array<User>>
    getByEmail(email: string): Promise<User>
    getById(id: string): Promise<User>
    create(userData: CreateUserDTO): Promise<User>
    update(id: string, newUserData: UpdateUserDTO): Promise<User>
    softDelete(id: string): Promise<User>
}