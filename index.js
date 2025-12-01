import express from "express"

let app = express();

app.get("/", (req, res)=>{
    console.log( "That is a GET request!")
});

app.post("/", (req, res)=>{
    console.log("This is a POST request")
});



app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
});