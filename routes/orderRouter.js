import { addOrder } from "../controllers/orderController";
import express from 'express'

const orderRouter = express.Router();

orderRouter.post("/order", addOrder);

export default orderRouter;
