import { Model, isValidObjectId } from 'mongoose'
import { IUserRepository } from './userRepo-interface';
import { User } from '../models/userModel';
import { CreateUserDTO } from '../dtos/createUserDTO';
import { UpdateUserDTO } from '../dtos/updateUserDTO';


export class UserRepository implements IUserRepository {
    constructor(private userModel: Model<User>) { }

    async getAll(): Promise<User[]> {
        const users = await this.userModel.find({ deletedAt: null })
        return users
    }
    async getByEmail(email: string): Promise<User | null> {
        const user = await this.userModel.findOne({ email: email })
        return user
    }
    async getById(id: string): Promise<User | null> {
        const user = await this.userModel.findOne({ _id: id })
        return user
    }
    async create(userData: CreateUserDTO): Promise<User | null> {
        const newUser = await this.userModel.create(userData)
        return newUser
    }
    async update(id: string, newUserData: UpdateUserDTO): Promise<User | null> {
        if (!isValidObjectId(id)) {
            throw new Error(`Id ${id} is not valid.`)
        }
        const updateUser = await this.userModel.findByIdAndUpdate(id, newUserData, { new: true })
        return updateUser
    }
    async softDelete(id: string): Promise<User | null> {
        if (!isValidObjectId(id)) {
            throw new Error(`Id ${id} is not valid.`)
        }
        const deleteUser = await this.userModel.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true })
        return deleteUser
    }

    async activateUser(id: string): Promise<User | null> {
        if (!isValidObjectId(id)) {
            throw new Error(`Id ${id} is not valid.`)
        }
        const activateUser = await this.userModel.findByIdAndUpdate(id, { deletedAt: null }, { new: true })
        return activateUser
    }

}