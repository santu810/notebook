var jwt = require('jsonwebtoken');
const JWT_SEC = 'hsgnwsttet63bdjd';

const fetchuser=(req,res,next)=>{
const token=req.header('auth-token');
if(!token){
    res.status(401).send({error:"bad request"})
}try {
    const data=jwt.verify(token,JWT_SEC);
    req.user=data
    next();
} catch (error) {
    res.status(401).send({error:"bad request"})
}

}
module.exports=fetchuser;