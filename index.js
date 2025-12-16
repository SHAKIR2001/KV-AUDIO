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
        let studentSchema = mongoose.Schema({
        name: String,
        age: Number,
        height : Number
    })

    let Student = mongoose.model("students",studentSchema); //create the connection between our schema and the collection(in DB)

    Student.find().then(
        (result)=>{
            res.json(result)
        }
    ).catch(
        ()=>{
            res.json({
                message: "Students cannont be find"
            })
        }

    )

});

app.post("/", (req, res)=>{
    let studentSchema = mongoose.Schema({
        name: String,
        age: Number,
        height : Number
    })

    let Student = mongoose.model("students",studentSchema); //create the connection between our schema and the collection(in DB)

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
    console.log( "This is a DELETE request")
});



app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
});