import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Form,Button,Col} from 'react-bootstrap';
import './App.css';

function Login(){

  const navigate=useNavigate();

    const [user, setUser] = useState({
      name: '', email: '', mobile: ''});
    let name, value;
    const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      setUser({ ...user, [name]: value });
    }
    const postData = async (e) => {
      e.preventDefault();
    
  
      const { name, email,mobile} = user;
  
      const res = await fetch("/login", {
        method: "POST",
        headers: {
  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, mobile
        })
      
      });
  
    if(res.status === 422 || !res)
    {
      window.alert("invalid register");
      console.log("invalid register");
    }
    else
    {
      const data=await res.json();
      window.alert("login successfull");
      console.log("login successfull");
      console.log(data);
      navigate("/navbar");
    }
  }
    return(
      
    <div className='background'>
       <Form method='POST'>
     <div className='mx-0 px-0 coke'> 
     <Col sm="3">    
  <Form.Group   className="mb-3  " controlId="formBasicName">
    <Form.Label className=' mt-4'> Name</Form.Label>
  
    <input type="text" name="name" value={user.name} onChange={handleInputs}  className=' mt-4'  placeholder="Enter Full Name" />
   
  </Form.Group>
  </Col>
  </div>
  <div className='mx-0 px-0 coke'>
  <Col sm="3">
  <Form.Group className="mb-3  " controlId="formBasicPassword">
    <Form.Label className=' mt-4'>Email</Form.Label>
   
    <input type="email" name="email" value={user.email} onChange={handleInputs} className=' mt-4' placeholder="Enter Your Email" />
  
  </Form.Group>
  </Col>
  </div>

  <div className='mx-0 px-0 coke'>
  <Col sm="3">
    <Form.Group  className="mb-3  " controlId="formBasicPassword">
    <Form.Label className=' '>Mobile </Form.Label>
   
      <input type="text" name="mobile" value={user.mobile} onChange={handleInputs}  placeholder="Mobile Number" />
    </Form.Group>
    </Col>
   
    </div>

  


   
  
    <Form.Group className='coke'>
  <Button className='border border-light rounded-pill' onClick={postData}  variant="" type="submit">
    Submit
  </Button>
  </Form.Group>
</Form>
</div>
       
    )
}
export default Login;