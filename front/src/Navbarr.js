import { useEffect, useState } from 'react';
import { useNavigate,Link} from 'react-router-dom';
import Timer from './Timer';
import './App.css';

function Navbarr() {

    const navigate=useNavigate();
    const [userData,setUserData]=useState({});
    
    const MinSecs = { minutes: 9, seconds: 60}
       useEffect(() => {

        const callAboutus=async ()=>{
            try{
              const res= await fetch('/navbar',{
                method: "GET",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
              
                credentials:'include'
                   
              
              });
        
              const res1 =await res.json();
              console.log(res1);
              setUserData(res1);
             
              
              if(!res.status===200){
                const error=new Error(res.error);
                throw error;
              }
        
            }catch(err){
              console.log(err);
              navigate('/login');
        }
          }
          
            
        callAboutus();

         }, [navigate]);

        
  return (
    <div>
      <div className='fs-2'>Welcome {userData.name}</div> 
      <div className='fs-2' style={{textAlign:"end"}}><Link to='/logout' style={{textDecoration:"none"}}>logout</Link></div>

        
     <div className='timer fs-2'><Timer MinSecs={MinSecs}/></div>

    
        </div>
 
  )
}

export default Navbarr;