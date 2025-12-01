import express from "express"

let app = express();

app.use(bodyParser.json());  //idhu app = express in pirahu koduttal wendum aduththa requests(GET,POST,PUT,DELETE) nadakka mun

app.get("/", (req, res)=>{
    console.log( "That is a GET request!")
    res.json( {
        message : "Good morning " + req.body.Name
    })
});

app.post("/", (req, res)=>{
    console.log("This is a POST request")
    res.json( {message : "This is a POST request", status : "Success" } )
});

app.delete("/", (req, res)=>{
    console.log( "This is DELETE a request")
});



app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
});