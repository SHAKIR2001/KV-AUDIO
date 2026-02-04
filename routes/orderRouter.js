import { addOrder,getQuote } from "../controllers/orderController.js";
import express from 'express'

const orderRouter = express.Router();

orderRouter.post("/", addOrder);
orderRouter.post("/quote", getQuote );

export default orderRouter;
