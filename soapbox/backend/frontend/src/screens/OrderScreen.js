import React, { useEffect, useState } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Messages from '../components/Messages'
import { getOrderDetails, getOrderDetailsOrder, payOrder } from '../actions/orderActions'
import { ORDER_PAY_RESET } from '../constants/orderConstants'
import { useParams } from 'react-router-dom'
//npm install react-paypal-button-v2 --save
import Loader from '../components/Loader'
import {PayPalButton} from 'react-paypal-button-v2'


function OrderScreen() {

    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [sdkReady, setSdkReady] = useState(false)

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading } = orderDetails


    const orderPay = useSelector(state => state.orderPay)
    const { loading: loadingPay, success: successPay, } = orderPay

    if (!loading && !error) {
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    }

    //AUoirieT8NTWGkZc1RPmWWxHO512znq6N30-3_ivhufScz3Tr6y0t3LiI4qIDbzeKFMnSRljNU0gXRvo

    const addPayPalScript = () => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://www.paypal.com/sdk/js?client-id=AUoirieT8NTWGkZc1RPmWWxHO512znq6N30-3_ivhufScz3Tr6y0t3LiI4qIDbzeKFMnSRljNU0gXRvo&currency=USD'
        script.async = true
        script.onload = () => {
            setSdkReady(true)
        }
        document.body.appendChild(script)
    }

    useEffect(() => {
        if (!order || successPay || order._id !== Number(id)) {
            dispatch({ type: ORDER_PAY_RESET })
            dispatch(getOrderDetails(id))
        } else if (!order.isPaid) {
            if (!window.paypal) {
                addPayPalScript()
            } else {
                setSdkReady(true)
            }

        }
    }, [dispatch, order, id, successPay])


    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(id, paymentResult))
    }


    return loading ? (
        <Loader />
    ) : error ? (<Messages variant='danger'>{error}</Messages>
    ) :

        (
            <div>
                <h1>Order: {order._id}</h1>
                <Row>
                    <Col md={8}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Shipping</h2>
                                <p><strong>Name: </strong> {order.user.name}</p>
                                <p><strong>Name: </strong><a href={`mailto::${order.user.email}`}>{order.user.email}</a></p>


                                <p>
                                    <strong>Shipping: </strong>
                                    {order.shippingAddress.address},  {order.shippingAddress.city}
                                    {'  '}
                                    {order.shippingAddress.postalCode},
                                    {'  '}
                                    {order.shippingAddress.country}
                                </p>

                                {order.isDelivered ? (
                                    <Messages variant='success'>Delivered on {order.deliveredAt}</Messages>
                                ) : (
                                    <Messages variant='warning'>Not Delivered</Messages>
                                )}

                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h2>Payment Method</h2>
                                <p>
                                    <strong>Method: </strong>
                                    {order.paymentMethod}
                                </p>

                                {order.isPaid ? (
                                    <Messages variant='success'>Paid on {order.paidAt}</Messages>
                                ) : (
                                    <Messages variant='warning'>Not Paid</Messages>
                                )}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h2>Order Items</h2>
                                {order.orderItems.length === 0 ? <Messages variant='info'>
                                    Order is empty
                                </Messages> : (
                                    <ListGroup variant='flush'>
                                        {order.orderItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={1}>
                                                        <Image src={`http://127.0.0.1:8000${item.image}`} alt={item.name} fluid rounded />
                                                    </Col>

                                                    <Col>
                                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                    </Col>

                                                    <Col md={4}>
                                                        {item.qty} X ${item.price} = ${(item.qty * item.price).toFixed(2)}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )}
                            </ListGroup.Item>

                        </ListGroup>

                    </Col>

                    <Col md={4}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h2>Order Summary</h2>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Items:</Col>
                                        <Col>${order.itemsPrice}</Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Shipping:</Col>
                                        <Col>${order.shippingPrice}</Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Tax:</Col>
                                        <Col>${order.taxPrice}</Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Total:</Col>
                                        <Col>${order.totalPrice}</Col>
                                    </Row>
                                </ListGroup.Item>

                                {!order.isPaid && (
                                    <ListGroup.Item>
                                        {loadingPay && <Loader />}

                                        {!sdkReady ? (
                                            <Loader />
                                        ) : (
                                            <PayPalButton
                                                amount={order.totalPrice}
                                                onSuccess={successPaymentHandler} />
                                        )}
                                    </ListGroup.Item>
                                )}

                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
}


export default OrderScreen