const mongoose = require('mongoose');


const connDB= ()=>{
    return mongoose.connect(`mongodb+srv://route:route1234@cluster0.7gl5emz.mongodb.net/saraha`)
    .then(console.log('connected DB'))
    .catch(err =>console.log('fail to connect DB',err))
}


module.exports = connDB;
