const messageModel = require("../../../DB/model/message");
const userModel = require("../../../DB/model/user");
const CryptoJS = require("crypto-js");



const viewprofile =async (req,res)=>{
    try {
        const user =await userModel.findById(req.user._id);
        res.json({message:"Done",user}) 
    } catch (error) {
        res.json({message:"catch error",error}) 
        
    }
}
const messageList =async (req,res)=>{
    try {
        const messages =await messageModel.find({reciverId:req.user._id})
            .populate([{path:"reciverId",select:"name email -_id"}
            ,{path:"senderId",select:"name email -_id"}]);
        res.json({message:"Done",messages}) 
        
    } catch (error) {
        res.json({message:"catch error",error}) 
        
    }
}
const updateProfilePic =async (req,res)=>{
    try {
        if (req.fileErr) {
            
            res.json({message:"in-valid file format"}) 
        } else {
            
            console.log({conFile:req.file});
            // const imageURL = `${req.protocol}://${req.headers.host}/uploads/${req.file.filename}`
            const imageURL = `${req.finalDestination}/${req.file.filename}`
            const user =await userModel.findOneAndUpdate(req.user._id,{profilePic:imageURL},{new:true})
            res.json({message:"Done",user}) 
            
        }  
    } catch (error) {
        res.json({message:"catch error",error}) 
        
    }
}


const updatecoverPic =async (req,res)=>{
    try {
        if (req.fileErr) {
            
            res.json({message:"in-valid file format"}) 
        } else {
            
            // console.log({conFile:req.files});
            const imagesURL = []
            for (let index = 0; index < req.files.length; index++) {
                imagesURL.push(`${req.finalDestination}/${req.files[index].filename}`)
                
            }
            // const imageURL = `${req.protocol}://${req.headers.host}/uploads/${req.file.filename}`
            const user =await userModel.findOneAndUpdate(req.user._id,{coverPic:imagesURL},{new:true})
            res.json({message:"Done",user}) 
            
        }  
    } catch (error) {
        res.json({message:"catch error",error}) 
    }
}
const updatephone = async (req,res)=>{
    const cipherphone = CryptoJS.AES.encrypt(req.body.phone ,'secret key 123').toString();       
    const user =await userModel.findOneAndUpdate({_id:req.user._id},{phone:cipherphone},{new:true})
    res.json({message:"Done",user}) 
            
}

module.exports = {viewprofile,messageList,updateProfilePic,updatecoverPic,updatephone};