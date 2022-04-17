import {useState,useEffect} from 'react';
import './Home.css';

function Home(){

   
    const[userData,setUserData]=useState({name:"",email:"",mobile:"",message:""});

    useEffect(() => {
   
     const contactus=async ()=>{
       try{
         const res= await fetch('/getdata',{
           method: "GET",
           headers: {
             'Content-Type': 'application/json'
           },
      
              
         
         });
   
         const res1 =await res.json();
         console.log(res1);
         setUserData({...userData,name:res1.name,email:res1.email,mobile:res1.mobile});
        
         
         if(!res.status===200){
           const error=new Error(res.error);
           throw error;
         }
   
       }catch(err){
         console.log(err);
       
   }
     }
       contactus();
       
     
      }, []);
      
      const handleInputs=(e)=>{
          const name=e.target.name
          const value=e.target.value
          setUserData({...userData,[name]:value})
      }
  
      const contactForm=async(e)=>{
          e.preventDefault();
          const {name,email,mobile,message}=userData;
  
          const res=await fetch('/contact',{
              method: "POST",
              headers: {
                  'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({name, email,mobile,message})
          });
          const res1=await res.json();
          if(!res1){
              console.log("message not send");
          }else{
              alert("message sent successfully");
              setUserData({...userData,message:""})
          }
      }
    
    return(
      

<div>
<div class="shade">
		<div class="blackboard">
				<div class="form">
					<form method='POST'>
						<p>
								<label>Name: </label>
								<input type="text" name='name' value={userData.name} onChange={handleInputs}/>
						</p>
						<p>
								<label>Email: </label>
								<input type="text" name='email' value={userData.email} onChange={handleInputs} />
						</p>
						<p>
								<label>Mobile: </label>
								<input type="tel" name='phone' value={userData.mobile} onChange={handleInputs} />
						</p>
						
						<p>
								<label>Message: </label>
								<textarea  name='message'  value={userData.message} onChange={handleInputs}></textarea>
						</p>
						<p class="wipeout">
							<button type='submit' onClick={contactForm}>send</button>
						</p>
						</form>
				</div>
		</div>
</div>
</div>



     
    )
}
export default Home;