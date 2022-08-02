const jwt = require("jsonwebtoken");
const userModel = require("../DB/model/user");
const Roles = {
    Admin:"Admin",
    User:"User"
}
  const auth = (acessRoles)=>{
      return async (req,res,next)=>{
          try {
            const headerToken = req.headers.authorization;
            // console.log(headerToken);
            if (!headerToken ||headerToken==null ||headerToken==undefined 
                  ||headerToken==0 ||!headerToken.startsWith(`${process.env.tokenBearerKey} `) ) {
                res.json({message:"in-valid header token"})
            }else{
                const token =headerToken.split(" ")[1];
                // console.log(token);
                const decoded = jwt.verify(token , process.env.tokenSignature);
                // console.log(decoded);
                const findUser = await userModel.findById(decoded.id);
                if (!findUser) {
                    res.json({message:"in-valid user id token"})
                } else {
                    if (acessRoles.includes(findUser.role)) {
                        req.user = findUser;
                        next();
                    } else {
                        // console.log(findUser);
                        res.status(401).json({message:"not authorized user"}) 
                    }
                }
            }
          } catch (error) {
             res.json({message:"catch error",error}) 
          }
      }
  }

  module.exports = {
    auth,
    Roles
};