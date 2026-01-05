import Inquiry from "../models/inquiry.js";
import { isItCustomer, isItADMIN } from "./userController.js";


export async function addInquiry(req,res){

    try{
        if(isItCustomer(req)){
            const data =  req.body;

            data.email = req.user.email     //JWT token moolam iwatrai eduththal
            data.phone = req.user.phone     //

            //inquiry ondritku unique id ondrei create seidhal start...
            let id = 0;     

            const inquiries = await Inquiry.find().sort({id:-1}).limit(1);   //kadesiyaaha ulla id in value ei eduththal; sort({id:-1}) DB il ulla id halai iarnagu varisei paduththal; limit(1) irangu varisei paduththi  ulla ID halin 1st value i maaththiram eduththal

            if( inquiries.length == 0){  //oru inquiries um illavidil "id = 1" aakkudhal, ahdaavadhu mudhal review itkaana id
                id = 1;
            }else{
                
                id = inquiries[0].id + 1 //direct aha id = inquiries + 1 kudkka mudiyaadhu because DB il irundhu oru value wandhaalum adhu ARRAY vadivil varum so andha array in [0] 1st index udan ondu kootti (inquiries[0].id + 1) id il save siyypaddum 

            }

            data.id = id //create seidha unique id ei inqurie id itku samappaduththal

            const newInquiry = new Inquiry(data)
            const responce =  await newInquiry.save()

            res.json({
                message : "Inquiry added successfully", id : responce.id
            })
        }

    }catch(e){
        res.status(500).json({message : "Inquiry cannot be added"})
    }
}

export async function getInqury(req,res){
    try{
        if(isItADMIN(req)){
            const inquiries = await Inquiry.find();
            res.json(inquiries)
            
        }else if(isItCustomer(req)){
            const inquiries = await Inquiry.find({email : req.user.email})
            res.json(inquiries)
        }else{
            res.status(403).json({
                message : "You are not authorized to perform this action"
            })
        }
    }catch(e){
        res.status(500).json({message : "Failed to get inquiries"})
    }

}