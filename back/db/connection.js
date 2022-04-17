const mongoose=require('mongoose');

const Db=process.env.DATABASE;
mongoose.connect(Db,{
   
    useNewUrlParser:true,
   useUnifiedTopology:true
 }).then(()=>{
   console.log(`hello my connection successfull`);
 }).catch((err)=>console.log(err));