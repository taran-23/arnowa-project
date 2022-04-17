const mongoose=require('mongoose');

const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
      type:String,
      required:true
    },
 
   mobile:{
       type:Number,
       required:true
  },

  date:{
    type:Date,
    default:Date.now
  },
  messages:[
    {
      name:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true
      },
      mobile:{
        type:Number,
        required:true
      },
      message:{
        type:String,
        required:true
      }
    }
  ],
  tokens:[
    {
      token:{
        type:String,
    required:true
      }
    }
  ]
  
  })

 userSchema.methods.generateAuthToken=async function(){
  try{
    const token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
    this.tokens=this.tokens.concat({token:token});
    await this.save();
    return token;

  }catch(err){
    console.log(err);

  }
}

userSchema.methods.addMessage=async function(name,email,mobile,message){
  try{
    this.messages=this.messages.concat({name,email,mobile,message});

    await this.save();
    return this.messages;
  }catch(error){
    console.log(error)
  }
}
  
  const User=new mongoose.model("User",userSchema);


  module.exports=User;