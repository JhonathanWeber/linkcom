import { Model, isValidObjectId } from 'mongoose'
import { IUserRepository } from './userRepo-interface';
import { User } from '../models/userModel';
import { CreateUserDTO } from '../dtos/createUserDTO';
import { UpdateUserDTO } from '../dtos/updateUserDTO';


export class UserRepository implements IUserRepository {
    constructor(private userModel: Model<User>) { }

    async getAll(): Promise<User[]> {
        const users = await this.userModel.find()
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
        // console.log(userData, { message: 'line 24' })
        const newUser = await this.userModel.create(userData)
        // console.log(newUser, { message: 'line 26' })
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

}