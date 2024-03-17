const express=require('express');
const router=express.Router();
const User=require('../models/User.js');
const {body,validationResult } = require('express-validator');


router.post('/',body('name','enter valid name').isLength({min:3}),body('email').isEmail(),body('password').isLength({ min: 5 }), (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return res.send(req.body);
  }

  res.send({ errors: result.array(Error) });

   const user=User(req.body);
   user.save()
  })

module.exports=router