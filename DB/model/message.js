const mongoose = require('mongoose')


const messageSchema = mongoose.Schema({
    messageBody:{
        type:String,
        require:true,
    },
    reciverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

},{
    timestamps:true
})


const messageModel = mongoose.model('message',messageSchema);

module.exports =messageModel;