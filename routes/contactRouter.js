import express from "express";
import { createContactMessage, getAllContactMessages } from "../controllers/contactController.js";

const contactRouter = express.Router();

// Public Contact Us form submit
contactRouter.post("/", createContactMessage);

// Admin: get all contact messages
contactRouter.get("/", getAllContactMessages);

export default contactRouter;
