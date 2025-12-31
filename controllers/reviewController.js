import Review from "../models/review.js"

export function addReview(req,res){
    if(req.user == null){
        res.status(401).json({
            message : "Please login and try again"
        })
        return
    }

    const data = req.body;

    data.name = req.user.firstName + " " + req.user.lastName; //ingu review podum naparin fistname + last name ei eduththu review il ulla name itku koduththal


    const newReview = new Review(data)





}