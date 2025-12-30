import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js"
import productRouter from "./routes/productRoute.js";
import jwt from "jsonwebtoken"


const app = express();

app.use(bodyParser.json());  //idhu app = express in pirahu koduttal wendum aduththa requests(GET,POST,PUT,DELETE) nadakka mun
app.use( (req,res,next)=>{  //Authentication

    let token = req.header("Authorization")
    
    if (token != null){
        token = token.replace("Bearer ","") //Bearer (space) endrathei remove seidhal

        jwt.verify(token, "kv-secret-89!",
        (err,decoded)=>{
            if(!err){
               req.user = decoded;
               
            }
        });
    }
    next()
});

let mongoUrl = "mongodb+srv://admin:123@cluster0.hjazmey.mongodb.net/?appName=Cluster0"

mongoose.connect(mongoUrl);

let connection =  mongoose.connection
connection.once("open", ()=>{
    console.log("MongoDB connected successfully ✅")
});


app.use("/api/users", userRouter)
app.use("/api/products", productRouter)

app.listen(3000,()=>{
    console.log("Server is running on PORT 3000 🚀")
});