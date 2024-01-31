import { CreateUserDTO } from "../dtos/createUserDTO";
import { UpdateUserDTO } from "../dtos/updateUserDTO";
import { User } from "../models/userModel";

export interface IUserRepository {
    getAll(): Promise<Array<User>>

    getByEmail(email: string): Promise<User | null>
    getById(id: string): Promise<User | null>
    create(userData: CreateUserDTO): Promise<User | null>
    update(id: string, newUserData: UpdateUserDTO): Promise<User | null>
    softDelete(id: string): Promise<User | null>
    activateUser(id: string): Promise<User | null>
}