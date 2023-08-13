import React from 'react'
import { Form, Button, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'

import { register } from '../actions/userActions'
import Messages from '../components/Messages'



function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('');
    const [message, setMessage] = useState('')
  
    const dispatch = useDispatch();
  
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();
  
    const redirect = location.search ? location.search.split("=")[1] : "/";
  
    const userRegister = useSelector(state => state.userRegister)
    const {error, loading, userInfo} = userRegister
  
    useEffect (() => {
      if(userInfo) {
        navigate(redirect)
      }
    }, [userInfo, redirect, navigate])
  
    const submitHandler = (e) => {
        e.preventDefault();
      if(password !== confirmPassword){
        setMessage("Passwords do not match.")
      }else{
        dispatch(register(name, email, password))
      }
    }
  





  return (
    <FormContainer>
          <h1>Register</h1>
          {message && <Messages variant='danger'>{message}</Messages>}
        {error && <Messages variant='danger'>{error}</Messages>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control required
                  type='text'
                  placeholder="Enter your name"
                  value = {name}
                  onChange = {(e) => setName(e.target.value)}>
                      
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control required
                  type='email'
                  placeholder="Enter your email"
                  value = {email}
                  onChange = {(e) => setEmail(e.target.value)}>                      
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control required
                  type='password'
                  placeholder="Password"
                  value = {password}
                  onChange = {(e) => setPassword(e.target.value)}>         
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control required
                  type='password'
                  placeholder="Confirm Password"
                  value = {confirmPassword}
                  onChange = {(e) => setConfirmPassword(e.target.value)}>         
                </Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>Register</Button>
        </Form>
        <Row className='py-3'>
            <Col>
            Have an Account? <Link to={redirect ? `/login?redirect=${redirect}` :
           '/login'}>Sign In</Link>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default Register
