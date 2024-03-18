const express=require('express');
const router=express.Router();
const User=require('../models/User.js');
const {body,validationResult } = require('express-validator');


router.post('/',body('name','enter valid name').isLength({min:3}),body('email').isEmail(),body('password').isLength({ min: 5 }), async(req, res) => {
  const result = validationResult(req);
  
  if (!result.isEmpty()) {
    return res.send({ errors: result.array(Error)});
    }
   let user=await User.findOne({email:req.body.email});
   if(user){
    return res.send({ errors:"user already exists"});
   }
      user=await User.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
    })
    res.send(req.body);
   
  })

module.exports=router