import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button} from 'react-bootstrap';
import LoginModal from '../modals/LoginModal';
import SignUpModal from '../modals/SignUpModal';


const NavbarMain = () => {


  return (

    <Navbar fixed='top' expand='lg'>
      <Container fluid>
          <Nav className='ml-auto'>
            
            <Nav.Link id="navText" as={Link} to={"/"}>Marvel Home</Nav.Link>

            
            <LoginModal />
            <SignUpModal />
            
  
        
        </Nav>
      </Container>
    </Navbar>


  );
};

export default NavbarMain;







