import { addOrder,getQuote, getOrders } from "../controllers/orderController.js";
import express from 'express'

const orderRouter = express.Router();

orderRouter.post("/", addOrder);
orderRouter.post("/quote", getQuote );
orderRouter.get("/", getOrders)

export default orderRouter;
