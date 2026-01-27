import Order from "../models/order.js";
import Product from "../models/product.js";

export async function addOrder(req,res){
    const data = req.body;
    const orderInfo = {

    }

    if ( req.user == null){
        res.status(401).json( {message : "Please login and try again"})
        return
    }

    orderInfo.email = req.user.email; //user in email eduththal


    const lastOrder = Order.find().sort({orderId: -1}).limit(1) //get the last order ID

    if(lastOrder.length == 0){ //check if there any orderIDs avauilable
        orderInfo.orderId = "ORD0001" //if not avauilable the "ORD0001" this is the 1st orderId
    }
    else{

        const lastOrderId = lastOrder[0].orderId     
        const lastOrderNumberInString = lastOrderId.replace("ORD", "") //remove the "ORD" from the orderId
        lastOrderNumber = parseInt(lastOrderNumberInString) //ORD ei remove seidhaalum adhan pin irukkum numbers String il irukkum so adhei Int aha maatrudhal
        const currentOrderNumber = lastOrderNumber + 1 //last orderId in number itku +1 pannudhal 
        const formattedNumber = String(currentOrderNumber).padStart(4, '0') //4digits number manage seidhal (doubt) 0001 0002 0003
        orderInfo.orderId = "ORD" + formattedNumber
    }

    for(let i=0; i<data.orderedItems.length; i++){ //front endaal anuppiya product = data.orderedItems order seidha productshal
        try{
             const product = await Product.findOne({key : data.orderId[i].key}) //import product and search if there any products have related to the key that we get from order

             if (product == null){
                res.statsu(404).json({message : "Product not found"})
                return
             }

             


        }catch(e){
            res.status(500).json({message : "Can not make an order"})
        }
       
       
    }


}
