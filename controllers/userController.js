import User from "../models/user.js"
import bcrypt from "bcrypt";
export function registerUser(req,res){

    const data = req.body;

    data.password = bcrypt.hashSync(data.password,10) //10 = solting rounds

    const newUser = new User(data)

    newUser.save().then(
        ()=>{
            res.json({
                message : "User registred successfully"
            })
        }
    ).catch(
        (error)=>{
            res.status(500).json(
            {
                error : "User registration failed"
            })
        }
    )

}

export function loginUser(req,res){
    const data = req.body;

    User.findOne({
        email : data.email
    }).then(
        (user)=>{ //email porundhum user irundhal andha user in ella data waiyum (user) inkul save seyyappadum
            if (user == null){
                res.status(404).json({
                    error : "User not found"
                })
            }else{
               const isPassowrdCorrect = bcrypt.compareSync(data.password,user.password);

                if (isPassowrdCorrect){
                    res.json({
                        message : "Login successful"                 
                    })
                }else{
                    res.json({
                        error : "login failed"
                    })
                }



            }
        }
    )
}