const mongoose=require('mongoose')

const URI='mongodb://localhost:27017';

const connectTomongo=()=>{
    mongoose.connect(URI)
}
module.exports=connectTomongo


