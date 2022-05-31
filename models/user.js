const mongoose = require('mongoose')

const usersDetails = new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true}
})

module.exports = mongoose.model('users', usersDetails);