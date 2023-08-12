import React from 'react'

 import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import { addToCart } from '../actions/cartActions';
import { ListGroup, Row, Col, Form, Image} from 'react-bootstrap';
import Messages from '../components/Messages';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';



function CartScreen() {
  
    const {productId} = useParams()
    const {search} = useLocation()
    const [searchParams] = useSearchParams();
    const qty = search ? Number(search.split('=')[1]) : 1
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

  return (
    <div>
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Messages variant={'info'} children={"Your cart is empty."}>
                        <Link to={'/'}>Go Back</Link>
                    </Messages>
                ) : (
                    <ListGroup variant="flush">
                        {cartItems.map(item => (
                            <ListGroup.Item key ={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded/>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}></Link>{item.name}
                                    </Col>
                                    <Col md={2}>
                                        ${item.price}
                                    </Col>
                                    <Col md={3}>
                                        <Form.Control
                                        as = 'select'
                                        value = {item.qty}
                                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                        >
                                            {
                                                [...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value = {x + 1}>
                                                        {x+1}
                                                    </option>
                                                ))
                                            }


                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col>
            </Col>
        </Row>

    </div>

  )
}

export default CartScreen
