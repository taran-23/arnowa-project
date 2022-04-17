const express=require('express');

const router=express.Router();
const jwt=require('jsonwebtoken')
const authenticate=require('../models/middleware/authenticate');



require('../db/connection');
const User = require('../models/userSchema');





router.post('/login',async(req,res)=>{
    //   console.log(req.body);
    //   res.json({message:req.body});

    const {name,email,mobile}=req.body;
    if(!name||!email||!mobile){
        return res.status(422).json({error:"please fill required filed"});
    }
    try{
        const useExist=await User.findOne({email:email})
        if(useExist){
            return res.status(422).json({error:"user already exist"});
        }
        const user=new User({name,email,mobile});

        const userregister=await user.save();
        if(userregister){

            const token= await userregister.generateAuthToken();
            console.log(token);
    
            res.cookie('jwtoken',token,{
               
                expires:new Date(Date.now()+600000),
                httpOnly:true
               
            });
            res.status(201).json({message:"user register successfully"});
        }

    }catch(err){
        console.log(err);
    }


});

router.get('/navbar',authenticate,async(req,res)=>{
    console.log('hello about us');
    res.send(req.rootUser);
});

router.get('/getdata',authenticate,async(req,res)=>{
    console.log('hello contact us');
    res.send(req.rootUser);
})
router.post('/contact',authenticate,async(req,res)=>{
    try{
        const {name,email,mobile,message}=req.body;
        if(!name||!email||!mobile||!message){
            console.log("error in contact form");
            return res.json({error:"plz fill the contact form"});
        }
        const userContact=await User.findOne({_id:req.userID});
        if(userContact){
            const usermessage=await userContact.addMessage(name,email,mobile,message)
            await userContact.save();
            res.status(201).json({message:"user contact succesfully"})
        }
    }catch(error){
        console.log(error);
    }
});

router.get('/logout',(req,res)=>{
    console.log("user logout");
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('user logout');
    
});


module.exports=router;