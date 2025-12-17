import User from "../models/user.js"
export function registerUser(req,res){

    const newUser = new User(req.body)

    newUser.save().then(
        ()=>{
            res.json({
                message : "User registred succefully"
            }).catch(
                (error)=>{
                    res.status(500).json(
                        {
                            error : "User registration failed"
                        }
                    )
                }
            )
        }
    )

}