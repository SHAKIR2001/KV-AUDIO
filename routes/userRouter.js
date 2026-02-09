import express from "express"
import { registerUser,loginUser,getAllUsers } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/users", getAllUsers )

export default userRouter