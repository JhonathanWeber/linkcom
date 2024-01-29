import { LoginDTO } from "../dtos/login-dtos";


export interface IAuthService {
    login(loginData: LoginDTO): Promise<string>
}