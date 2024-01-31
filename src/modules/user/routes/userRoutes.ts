import { Router } from "express";
import { AuthMiddleware } from "../../../middlewares/auth-middleware";
import { userModule } from "../factories/userFactory";


export const userRoutes = Router()


userRoutes.get('/users', userModule.getAll.bind(userModule))

userRoutes.get('/users/inactive', userModule.getAllDeleted.bind(userModule))

userRoutes.get('/user/:id', userModule.getById.bind(userModule))

userRoutes.get('/user-find', userModule.getByEmail.bind(userModule))

userRoutes.post('/user', userModule.create.bind(userModule));

userRoutes.put('/user/:id', userModule.update.bind(userModule))

userRoutes.put('/user/delete/:id', userModule.softDelete.bind(userModule))

userRoutes.put('/user/activate/:id', userModule.activateUser.bind(userModule))

