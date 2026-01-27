import { addOrder } from "../controllers/orderController.js";
import express from 'express'

const orderRouter = express.Router();

orderRouter.post("/", addOrder);

export default orderRouter;
