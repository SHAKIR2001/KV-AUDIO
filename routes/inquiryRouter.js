import express from "express"
import { addInquiry , getInqury} from "../controllers/inquiryController.js"

const inquiryRouter = express.Router();

inquiryRouter.post("/", addInquiry)
inquiryRouter.get("/", getInqury)

export default inquiryRouter;

