import mongoose from "mongoose"

let studentSchema = mongoose.Schema({
        name: String,
        age: Number,
        height : Number
})

let Student = mongoose.model("students",studentSchema); //create the connection between our schema and the collection(in DB)

export default Student