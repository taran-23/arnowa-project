import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Routes,Route,  Link} from "react-router-dom";
// import Masterlayout from './layouts/admin/Masterlayout';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Navbarr from './Navbarr';







function Header() {
  return (
    
          <div> 

        <Navbar bg="dark" variant="dark">
     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="./Login"><Link to="/login" className="text-decoration-none text-white fs-5">Login</Link></Nav.Link>
         <Nav.Link href="./Navbarr"><Link to="/navbar" className="text-decoration-none text-white fs-5">Profile</Link></Nav.Link>
       
       <Nav.Link href="./Home"><Link to="/" className="text-decoration-none text-white fs-5">Home</Link></Nav.Link>
       
      </Nav>
       </Navbar>
     
       <Routes>
         
        <Route path="/navbar" element={ <Navbarr />} /> 
       
         <Route path="/login" element={ <Login />} />

         <Route path="/logout" element={ <Logout />} />
       
        <Route path="/" element={ <Home />} />
       
       
        
       </Routes>
       </div>

      

  
    
 
   
  )
}

export default Header;