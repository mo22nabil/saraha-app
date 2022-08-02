const { auth } = require('../../middleWear/auth');
const validation = require('../../middleWear/validation');
const Message  = require('./controller/message');
const endpoint = require('./message.endpoint');
const { sendMessage, deleteMessage } = require('./message.validation');

const router = require('express').Router()


router.post('/message/:id',validation(sendMessage),Message.sendMessage)
router.delete('/message/:id',validation(deleteMessage),auth(endpoint.deleteMessage),Message.deleteMessage)



module.exports=router;