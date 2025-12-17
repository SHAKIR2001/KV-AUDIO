import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";


const app = express();

app.use(bodyParser.json());  //idhu app = express in pirahu koduttal wendum aduththa requests(GET,POST,PUT,DELETE) nadakka mun

let mongoUrl = "mongodb+srv://admin:123@cluster0.hjazmey.mongodb.net/?appName=Cluster0"

mongoose.connect(mongoUrl);

let connection =  mongoose.connection
connection.once("open", ()=>{
    console.log("MongoDB connected successfully ✅")
});



app.listen(3000,()=>{
    console.log("Server is running on PORT 3000 🚀")
});