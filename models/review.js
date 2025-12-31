import mongoose from "mongoose";

const reviewSchema =  new mongoose.Schema({

    email : {
        type : String,
        required : true,
        unique : true //one email(user) can have only one review
    },

    name : {
        type : String,
        required : true
    },

    rating : {
        type : Number,
        required : true
    },

    comment : {
        type : String,
        required : true
    },

    date : {
        type : Date,
        required : true,
        default : Date.now() //get the current date
    }


})

const Review = mongoose.model("Review", reviewSchema)

export default Review;