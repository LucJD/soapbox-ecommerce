import React, { useState } from 'react'
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { CardElement } from '@stripe/react-stripe-js'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getOrderDetails, payOrder } from '../actions/orderActions'
import Loader from '../components/Loader'
import Messages from '../components/Messages'
import { Row, Col, Button, ListGroup, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { deliverOrder } from '../actions/orderActions'
import { ORDER_PAY_RESET } from '../constants/orderConstants'
import { ORDER_DELIVER_RESET } from '../constants/orderConstants'



function OrderScreen() {

  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [sdkReady, setSdkReady] = useState(false)

  const orderDetails = useSelector(state => state.orderDetails)
  const {order, error, loading } = orderDetails

  const orderPay = useSelector(state => state.orderPay)
  const {loading: loadingPay, success: successPay} = orderPay


  const orderDeliver = useSelector(state => state.orderDeliver)
  const {loading: loadingDeliver, success: successDeliver} = orderDeliver

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin


  if (!loading && !error) {
    order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
}

  const addPayPalScript = () => {
    const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://www.paypal.com/sdk/js?client-id=AeDXja18CkwFUkL-HQPySbzZsiTrN52cG13mf9Yz7KiV2vNnGfTDP0wDEN9sGlhZHrbb_USawcJzVDgn'
        script.async = true
        script.onload = () => {
            setSdkReady(true)
        }
        document.body.appendChild(script)
  }

  useEffect(() => {

    if (!userInfo) {
        navigate('/login')
    }

    if (!order || successPay || order._id !== Number(id) || successDeliver) {
        dispatch({ type: ORDER_PAY_RESET })
        dispatch({ type: ORDER_DELIVER_RESET })

        dispatch(getOrderDetails(id))
    } else if (!order.isPaid) {
        if (!window.paypal) {
            addPayPalScript()
        } else {
            setSdkReady(true)
        }
    }
}, [dispatch, order, id, successPay, successDeliver])

const successPaymentHandler = (paymentResult) => {
  dispatch(payOrder(id, paymentResult))
}

const deliverHandler = () => {
  dispatch(deliverOrder(order))
}

  return (
   <CardElement/>
      
  )
}

export default OrderScreen
