const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const CryptoJS = require("crypto-js");


const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    phone:String,
    age:Number,
    emailConfirm:{type:Boolean , default:false},
    role:{type:String , default:'User'},
    gender:{type:String , default:'Male'},
    profilePic:{type:String },
    coverPic:Array
},{
    timestamps:true
})

userSchema.pre('save',async function(next){
    
    console.log(this);
    this.password = await bcrypt.hash(this.password, parseInt(process.env.saltRounds));
    console.log(this);
    next();
})

    
userSchema.pre('findOneAndUpdate',async function(){
    // console.log(this);
    // console.log(this.model);
    // console.log(this.getQuery());
    const hookData = await this.model.findOne(this.getQuery()).select("__v");
    // console.log(hookData);
    this.set({__v : hookData.__v + 1})
})
userSchema.post('findOne', function(result){
    console.log({result});
    result.phone = CryptoJS.AES.decrypt(result.phone, 'secret key 123').toString(CryptoJS.enc.Utf8);
})


// userSchema.pre('insertMany' ,async function (next,docs){
//     console.log(docs);
//     docs.password = await bcrypt.hash(docs.password ,parseInt(process.env.saltRounds));
//     docs.phone =  CryptoJS.AES.encrypt(docs.phone, process.env.encryptKey).toString();
//     console.log(docs);
//     next();
// })

const userModel = mongoose.model('User',userSchema);

module.exports =userModel;