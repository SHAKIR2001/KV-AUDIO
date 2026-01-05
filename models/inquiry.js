import mongoose from "mongoose";

const inquirySchema =  new mongoose.Schema({

    id : {
        type : Number,
        required : true,
        unique : true

    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    message : {
        type : String,
        required : true
    },

    date : {
        type : Date,
        required : true,
        dafault : Date.now()
    },

    responce : {
        type : String,
        required : false,
        dafault : ""
    },

    isResolved : {
        type : Boolean,
        required : true,
        dafault : false
    }

});

const Inquiry = mongoose.model("inquiries", inquirySchema)

export default Inquiry