import Product from "../models/product.js"

export function addProduct(req,res){

    if(req.user == null){
        res.status(401).json({
            message : "Please login and try again"
        })
        return //add return to close the function so other codes not run
    }

    if(req.user.role != "admin"){
        res.status(401).json({
            message : "You are not authorized to perform this action"
        })
        return //add return to close the function so other codes not run
    }

    const data = req.body
    const newProduct = new Product(data)
    newProduct.save().then(
        ()=>{
            res.json(
                {
                    message : "Product added successfully"
                }
            )
        }
    ).catch(
        (error)=>{
            res.status(500).json(
                {
                    error : "Can not add the Product"
                }
            )
        }
    )

}



