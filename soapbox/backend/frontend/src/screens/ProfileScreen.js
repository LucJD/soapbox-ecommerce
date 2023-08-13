import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateUserProfile } from '../actions/userActions'
import { getUserDetails } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

import { useEffect, useState } from 'react'

import { listMyOrders } from '../actions/orderActions'
import { Row, Col, Button} from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Messages from '../components/Messages'
import Loader from '../components/Loader'


function ProfileScreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userDetails = useSelector(state => state.userDetails)
    const {error, loading, user} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const {success} = userUpdateProfile

    // const orderListMy = use

    useEffect(() => {
        if(!userInfo) {
            navigate('login')
        }
        else{
            if (!user || !user.name || success) {
                dispatch({
                    type: USER_UPDATE_PROFILE_RESET
                })
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            } else{
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, userInfo, user, success])

    const submitHandler = (e) => {
        console.log(user._id)
        e.preventDefault()

        if (password !== confirmPassword){
            setMessage("Passwords do not match")

        }else{
            dispatch(updateUserProfile({
                'id': user._id,
                'name': name,
                'email': email,
                'password': password
            }))
            setMessage('')
        }
    }

  return (
    <Row>
        <Col md={3}>
            <h2>User Profile</h2>
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
                <Form.Control
                  type='password'
                  placeholder="Password"
                  value = {password}
                  onChange = {(e) => setPassword(e.target.value)}>         
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder="Confirm Password"
                  value = {confirmPassword}
                  onChange = {(e) => setConfirmPassword(e.target.value)}>         
                </Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>Update Information</Button>
        </Form>
        </Col>
        <Col md={9}>
            <h2>My Orders</h2>
        </Col>
    </Row>
  )
}

export default ProfileScreen
