const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const JWT_SEC = 'hsgnwsttet63bdjd';
const fetchuser=require('../middleware/fetchuser.js');


//signup endpoint
router.post('/createuser', body('name', 'enter valid name').isLength({ min: 3 }), body('email').isEmail(), body('password').isLength({ min: 5 }), async (req, res) => {
  const result = validationResult(req);
 
    if (!result.isEmpty()) {
      return res.send({ errors: result.array(Error) });
    }
    try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({ errors: "user already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const secpass = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secpass
    })
    const data = {
      id: user.id
    }
    const authtok = jwt.sign(data, JWT_SEC);
    // res.send(user)
    res.send(authtok);

  } catch (error) {
    res.status(500).send(error.message);
  }
})



//login endpoint
router.post('/login', body('email').isEmail(), body('password').exists(), async (req, res) => {
  const result = validationResult(req);
  
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }
  
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: "Invalid credentials" });
    }

    const match =await bcrypt.compare(password, user.password);
    
    if (!match) {
      return res.status(400).json({ errors: "Invalid credentials" });
    } 

    const data = {
      id: user.id
    }
    const authtok = jwt.sign(data, JWT_SEC);
    res.json({ authtok });
  } 
  catch (error) { 
    console.error(error);
    res.status(500).send("Internal Server Error"); 
  }
})


//fetchuser

router.post('/fetchuser',fetchuser, async (req, res) => {
   
   try {
    const userid=await req.user.id;
    const user=await User.findById(userid).select("-password");
       res.send(user);
   } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error"); 
   }
   

})

module.exports = router