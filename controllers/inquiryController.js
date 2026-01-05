import Inquiry from "../models/inquiry.js";

export async function addInquiry(req,res){
    const data =  req.body;
    const newInquiry = new Inquiry(data)
}