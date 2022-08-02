const mongoose = require('mongoose');


const connDB= ()=>{
    return mongoose.connect(process.env.dbUrl)
    .then(console.log('connected DB'))
    .catch(err =>console.log('fail to connect DB',err))
}


module.exports = connDB;