import { UserController } from '../controllers/userController';
import { UserModel } from '../models/userModel';
import { UserRepository } from '../repos/userRepo';
import { UserService } from '../services/userService';

class UserFactory {

    static getInstance() {
        const userRepository = new UserRepository(UserModel);
        const userService = new UserService(userRepository)
        const userController = new UserController(userService)
        return userController;
    }

}

export const userModule = UserFactory.getInstance();