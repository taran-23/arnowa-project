import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap' 

function Topbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" className='ps-0'>Admin</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing"><i class="fa-solid fa-user"></i></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </>
    )
}

export default Topbar;