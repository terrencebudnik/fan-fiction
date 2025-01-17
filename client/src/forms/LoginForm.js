import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ username: '', password: '' });
  const [validated] = useState(false);


  const [login, { data }] = useMutation(LOGIN_USER);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
    <div className='loginForm'>
    
    {data ? (
      <Link className='modalBodyText' to="/profile">back to the homepage.</Link>
    ) : (
      
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        
        <Form.Group>
          <Form.Label className='modalBodyText' htmlFor='username'>Username</Form.Label>
          <Form.Control id='inputBackground'
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label className='modalBodyText' htmlFor='password'>Password</Form.Label>
          <Form.Control className='inputBackground'
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback className='modalBodyText' type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button className='submitBtn'
          disabled={!(userFormData.username && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    )}
    </div>
    </>
  );
};

export default LoginForm;
