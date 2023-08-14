import React from 'react'

 import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Card, ListGroup, Row, Col, Form, Image, Button} from 'react-bootstrap';
import Messages from '../components/Messages';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function CartScreen() {
  
    const [searchParams] = useSearchParams();
    const qty = searchParams.get('qty')
    const productId = searchParams.get('productId')
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    useEffect(() => {
        console.log(searchParams.get('qty'))
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        console.log("on checkouthandler")
        navigate("/login?redirect=/shipping")
    }

    const continueShoppingHandler = () => {
        navigate("/")
    }

  return (
    <div>
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Messages variant={'info'} children={"Your cart is empty."}>
                        Your cart is empty. <Link to={'/'}>Go Back</Link>
                    </Messages>
                    
                ) : (
                    <ListGroup variant="flush">
                        {cartItems.map(item => (
                            <ListGroup.Item key ={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={`http://127.0.0.1:8000${item.image}`} alt={item.name} fluid rounded/>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}></Link>{item.name}
                                    </Col>
                                    <Col md={2}>
                                        <strong>Price: </strong>${item.price}
                                    </Col>
                                    <Col md={3}>
                                        
                                        <Form.Control size="sm"
                                        className={"form-select"}
                                        as = 'select'
                                        value = {item.qty}
                                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                        >

                                                {
                                                [...Array(item.countInStock).keys()].map((x) => (
                                     
                                                         <option value = {x + 1}>
                                                        {x+1}
                                                    </option>
                                              
                                                   
                                                ))
                                            }

                                        </Form.Control>
                                    </Col>
                                    <Col md={1}>
                                        <Button
                                        type='button'
                                        variant={'light'}
                                        onClick={() => removeFromCartHandler(item.product)}>
                                            <FontAwesomeIcon icon = {faTrash}/>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + Number(item.qty), 0)} items)</h2>
                            ${cartItems.reduce((acc, item) => acc + (item.qty*item.price), 0).toFixed(2)}
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup.Item>
                    <Button
                            type='button'
                            className='btn-block'
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}
                        >
                            Proceed To Checkout
                        </Button>
                        <Button
                        variant='light'
                        type='button'
                        className='w-100'
                        onClick={continueShoppingHandler}
                        >Go Back
                        </Button>
                    </ListGroup.Item>
                </Card>
            </Col>
        </Row>

    </div>

  )
}

export default CartScreen
