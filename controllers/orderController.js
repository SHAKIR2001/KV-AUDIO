import Order from "../models/order.js";

export async function addOrder(req,res){
    const data = req.body;
    const orderInfo = {

    }

    

    const lastOrder = Order.find().sort({orderId: -1}).limit(1) //get the last order ID

    if(lastOrder.length == 0){ //check if there any orderIDs avauilable
        orderInfo.orderId = "ORD0001" //if not avauilable the "ORD0001" this is the 1st orderId
    }else{

        const lastOrderId = lastOrder[0].orderId     
        const lastOrderNumberInString = lastOrderId.replace("ORD", "") //remove the "ORD" from the orderId
        lastOrderNumber = parseInt(lastOrderNumberInString) //ORD ei remove seidhaalum adhan pin irukkum numbers String il irukkum so adhei Int aha maatrudhal
        const currentOrderNumber = lastOrderNumber + 1 //last orderId in number itku +1 pannudhal 
        orderInfo.orderId = "ORD" + (lastOrderNumber + 1) 
        


    }

}
