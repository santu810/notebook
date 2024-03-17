const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
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
     date:{
        type:Date,
        default:Date.now
     }

})
const user=mongoose.model('user',userSchema)

module.exports=user