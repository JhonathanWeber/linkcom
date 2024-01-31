import { CreateUserDTO } from '../dtos/createUserDTO';
import { UpdateUserDTO } from '../dtos/updateUserDTO';
import { User } from '../models/userModel';
import { IUserRepository } from '../repos/userRepo-interface';
import bcrypt from 'bcrypt'
import { IUserService } from './userService-Interface';

export class UserService implements IUserService {
    constructor(private userRepository: IUserRepository) { }

    async getAll(): Promise<User[]> {
        const users = await this.userRepository.getAll()

        if (!users || users.length === 0) {
            throw new Error('Users not found!')
        }
        return users
    }

    async getByEmail(email: string): Promise<User> {
        const user = await this.userRepository.getByEmail(email)
        if (!user) throw new Error('User not found.')
        return user
    }

    async getById(id: string): Promise<User> {
        const user = await this.userRepository.getById(id)
        if (!user) throw new Error('User not found.')
        return user
    }

    async create(userData: CreateUserDTO): Promise<User> {
        userData.password = await bcrypt.hash(userData.password, 10)
        const newUser = await this.userRepository.create(userData)
        if (!newUser) throw new Error('Cannot create user.')
        return newUser
    }

    async update(id: string, newUserData: UpdateUserDTO): Promise<User> {
        const user = await this.userRepository.getById(id)
        if (!user) throw new Error('User not found.')
        const updateUser = await this.userRepository.update(id, newUserData)
        if (!updateUser) throw new Error('Cannot update user.')
        return updateUser
    }

    async softDelete(id: string): Promise<User> {
        const user = await this.userRepository.getById(id)
        if (!user) throw new Error('User not found')
        const deleteUser = await this.userRepository.softDelete(id)
        if (!deleteUser) throw new Error('Cannot delete user.')
        return deleteUser
    }

    async activateUser(id: string): Promise<User> {
        const user = await this.userRepository.getById(id)
        if (!user) throw new Error('User not found')
        const activateUser = await this.userRepository.activateUser(id)
        if (!activateUser) throw new Error('Cannot activated user.')
        return activateUser

    }

}