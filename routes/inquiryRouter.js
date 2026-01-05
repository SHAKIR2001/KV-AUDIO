import express from "express"
import { addInquiry , getInquiry, deleteInquiry} from "../controllers/inquiryController.js"

const inquiryRouter = express.Router();

inquiryRouter.post("/", addInquiry)
inquiryRouter.get("/", getInquiry)
inquiryRouter.delete("/:id", deleteInquiry)

export default inquiryRouter;

