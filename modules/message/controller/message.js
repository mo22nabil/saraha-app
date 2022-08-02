const messageModel = require("../../../DB/model/message");
const userModel = require("../../../DB/model/user");

const sendMessage = async(req,res)=>{

    const {id} = req.params;
    const {messageBody} = req.body;
    const user = await userModel.findById(id).select("name email");
    if (!user) {
        res.json({message:"not found user"})
    } else {
        const message = await messageModel.insertMany({messageBody , reciverId:user._id})
        res.json({message:"Done"})
    }
}

const deleteMessage = async(req,res)=>{

    try {
        const {id} = req.params ; //  message id
        const messageDetails = await messageModel.deleteOne({_id:id,reciverId:req.user._id});
        res.json({message:"Done",messageDetails})
    } catch (error) {
        res.json({message:"catch error",error})
        
    }
}

module.exports = {
    sendMessage,
    deleteMessage
}