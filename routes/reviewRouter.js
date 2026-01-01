import express from "express";
import { addReview, getReviews, deleteReview } from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/", addReview)
reviewRouter.get("/", getReviews)
reviewRouter.delete("/:email", deleteReview)

export default reviewRouter;