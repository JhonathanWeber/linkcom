import { Router } from "express";
import { userRoutes } from "../modules/user/routes/userRoutes";
import { AuthController } from "../modules/auth/controllers/authController";

export const routes = Router()

//----------------------------------------------------------------------------

// routes.post('/login')

//----------------------------------------------------------------------------

routes.use(userRoutes)