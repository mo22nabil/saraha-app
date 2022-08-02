const userRouter = require('./user/user.router')
const messageRouter = require('./message/messsage.router')
const authRouter = require('./auth/auth.router')



module.exports = {
    userRouter,
    messageRouter,
    authRouter
}