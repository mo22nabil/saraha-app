const userModel = require("../../../DB/model/user");
const bcrypt=require('bcrypt');
const jwt = require("jsonwebtoken");

const signin = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const findUser = await userModel.findOne({email});
        if (!findUser) {
            res.json({message:"invalid email "})
        }else{
            const match =await bcrypt.compare(password ,findUser.password);
            // console.log(match);
           if (!match) {
               res.json({message:"incorrect password"})
           } else {
               token = jwt.sign({id:findUser._id , isLoggedIn:true},process.env.tokenSignature,{expiresIn:'10h'})
               res.json({message:"Done",token})
           }
            
        }
    } catch (error) {
        res.json({message:"catch error",error})
    } 
}

module.exports = signin