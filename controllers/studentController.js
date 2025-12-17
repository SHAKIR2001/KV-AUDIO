import Student from "../models/student.js"
export function getStudents(req,res){
    Student.find().then(
        (result)=>{
            res.json(result)
        }
    ).catch(
       (error)=>{
        res.status(500).json({
            message : "Students cannot be found"
        })
       }
    )
}

export function postStudents(req,res){
    let StudentData = req.body;
    let student = new Student(studentData)

    student.save().then(
        res.json({
            message : "Studnet save successfully"
        })
    ).catch(
        res.json({
            message : "Student cannot be saved"
        })
    )


}

