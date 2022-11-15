import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav} from 'react-bootstrap';
import SignUpModal from '../modals/SignUpModal';
import LoginModal from '../modals/LoginModal';
import Auth from '../utils/auth';

const Navbar = () => {

  const [show, setShow] = useState(false);

  const handleShow = (modal) => setShow(true);

  return (

    <Navbar fixed='top' expand='lg'>
      <Container fluid>
          <Nav className='ml-auto'>
            
            <Nav.Link id="navText" as={Link} to={"/"}>Marvel Home</Nav.Link>
            {/* <Nav.Link id="navText" as={Link} to={"/community"}></Nav.Link>
            <Nav.Link className="active" as={Link} to={"/searchSpecific"}>Search Marvel</Nav.Link>
            
            {Auth.loggedIn() ? (
          <>
            <Nav.Link className="active" as={Link} to={"/profile"}>Profile</Nav.Link>
            <Nav.Link className="active" onClick={Auth.logout}>Logout</Nav.Link> 
          </> 
            ) : ( */}
          <> 

            <Button variant="danger" onClick={handleShow({LoginModal})}>Login</Button>
            <Button variant="danger" onClick={handleShow({SignUpModal})}>Sign-up</Button>

            <SignUpModal show={show}/>
            <LoginModal show={show}/>
          </>      
  
        
        </Nav>
      </Container>
    </Navbar>


  );
};

export default Navbar;







