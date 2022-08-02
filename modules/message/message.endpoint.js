const { Roles } = require("../../middleWear/auth");


const endpoint = {
    deleteMessage:[Roles.Admin,Roles.User]
}

module.exports = endpoint;