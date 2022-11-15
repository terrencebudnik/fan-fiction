import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import LoginForm from '../forms/LoginForm';

const LoginModal = () => {
  
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>Login</Button>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            <LoginForm />
        </Modal.Body>
        
        
      </Modal>
    </>
  );
}

export default LoginModal; 