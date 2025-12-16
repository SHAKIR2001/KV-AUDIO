import express from "express"
import { getStudents } from "../controllers/studentController.js"
import { postStudents } from "../controllers/studentController.js"

let studentRouter = express.Router()

studentRouter.get("/", getStudents)
studentRouter.post("/", postStudents)

export default studentRouter