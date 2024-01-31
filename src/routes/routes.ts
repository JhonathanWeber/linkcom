import { Router } from "express";
import { userRoutes } from "../modules/user/routes/userRoutes";

export const router = Router()

//----------------------------------------------------------------------------

//----------------------------------------------------------------------------

router.use(userRoutes)