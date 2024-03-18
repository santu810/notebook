const mongoose=require('mongoose')

const URI='mongodb://localhost:27017/notebook';

const connectTomongo=()=>{
    mongoose.connect(URI)
}
module.exports=connectTomongo


