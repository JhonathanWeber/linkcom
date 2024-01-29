
import bcrypt from 'bcrypt';
import { IUserRepository } from '../../user/repos/userRepo-interface';
import { LoginDTO } from '../dtos/login-dtos';
import { UserRepository } from './../../user/repos/userRepo';
import jwt from 'jsonwebtoken';
import { IAuthService } from './authService-Interface';


export class AuthService implements IAuthService {
    constructor(private userRepository: IUserRepository) {

    }

    async login(loginData: LoginDTO): Promise<string> {
        const user = await this.userRepository.getByEmail(loginData.email)

        if (!user || !user.password) {
            throw new Error('User not found')
        }

        const userPassword = user.password as string

        const isPasswordValid = await bcrypt.compare(loginData.password, userPassword)

        if (!isPasswordValid) {
            throw new Error('Invalid email or password.')
        }


        // user.password = null
        // delete user.password

        const payload = { ...user }
        const secretKey = process.env.JWT_SECRET_KEY as string
        const options = { expiresIn: '1d' }
        const token = jwt.sign(payload, secretKey, options)

        return token




    }
}