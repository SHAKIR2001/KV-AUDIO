import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

let app = express();

app.use(bodyParser.json());  //idhu app = express in pirahu koduttal wendum aduththa requests(GET,POST,PUT,DELETE) nadakka mun

let mongoUrl = "mongodb+srv://admin:123@cluster0.hjazmey.mongodb.net/?appName=Cluster0"

mongoose.connect(mongoUrl);

let connection =  mongoose.connection
connection.once("open", ()=>{
    console.log("MongoDB connected successfully")
});


app.get("/", (req, res)=>{
    console.log( "That is a GET request!")
    res.json( {
        message : "Good morning " + req.body.Name
    })
});

app.post("/", (req, res)=>{
    let studentSchema = mongoose.Schema({
        name: String,
        age: Number,
        height : Number
    })

    let Student = mongoose.model("students",studentSchema); //create the connection between our schema and the DB

    let newStudent = req.body

    let student = new Student(newStudent)

    student.save().then(
        ()=>{
            res.json({
                message: "Student save successfully"
            })
        }
    ).catch( ()=>{
        res.json(
            {
                message : "Student cannot be saved"
            }
        )
    })
});

app.delete("/", (req, res)=>{
    console.log( "This is DELETE a request")
});



app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
});