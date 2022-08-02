const { Roles } = require("../../middleWear/auth");



const endpoint = {
    profile : [Roles.Admin,Roles.User],
    profileMessages : [Roles.Admin,Roles.User],
    profileUpdatePic : [Roles.Admin,Roles.User],
    profUpCovPic : [Roles.Admin,Roles.User]
}
module.exports=endpoint