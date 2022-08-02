const userModel = require("../../../DB/model/user");

const {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
}= require ('http-status-codes');
const signup = async (req,res)=>{
    try {
        const {name,email,password} = req.body;
        const newUser = new userModel({name,email,password})
        const savedUser = await newUser.save()
        res.status(StatusCodes.CREATED).json({message:"Done",savedUser , status:getReasonPhrase(StatusCodes.CREATED)})
    } catch (error) {
        if (error.keyValue) {
            res.status(StatusCodes.BAD_REQUEST).json({message:"email already exist",error})
            
        }else{

            res.json({message:"catch error",error})
        } 
            
    } 
}

module.exports = signup