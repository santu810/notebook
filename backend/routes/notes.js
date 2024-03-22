const express=require('express');
const fetchuser = require('../middleware/fetchuser');
const router=express.Router();
const Notes=require('../models/Notes');
const { body, validationResult } = require('express-validator');
const { set } = require('mongoose');



//fetch notes endpoint
router.get('/fetchnotes',fetchuser, async(req, res) => {
  try {
    const notes=await Notes.find({user:req.user.id})  
    res.send(notes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error"); 
  }
    
  })


  //addnotes endpoint
  router.post('/addnotes',body('title', 'enter valid name').isLength({ min: 3 }), body('description').isLength({ min: 5 }),fetchuser,async(req,res)=>{
    const result = validationResult(req);
 
    if (!result.isEmpty()) {
      return res.send({ errors: result.array(Error) });
    }
    try {
      const note= await Notes.create({
        user:req.user.id,
        title: req.body.title,
        description: req.body.description,
        tag:req.body.tag
        
      })
      const notes=await note.save()
      res.send(notes)
    } catch (error) {
      console.error(error);
    res.status(500).send("Internal Server Error");
    }
  })


  //updatenote endpoint

 router.put('/updatenotes/:id',fetchuser,async(req,res)=>{
    const {title,description,tag}=req.body
     const newnote={};
     if(title){newnote.title=title}
     if(description){newnote.description=description}
     if(tag){newnote.tag=tag}

     let note=await Notes.findById(req.params.id);
     if(!note){return res.status(404).send("notes not found")}

     if(note.user.toString()!=req.user.id){
     return res.status(401).send("you are not allowed to update")
     }
     
      note=await Notes.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true});
      res.send(note);
 })
module.exports=router