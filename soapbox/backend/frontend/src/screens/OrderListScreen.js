import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import Messages from '../components/Messages'
import { LinkContainer } from 'react-router-bootstrap'
import { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { listOrders } from '../actions/orderActions'


function OrderListScreen() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const orderList = useSelector(state => state.orderList)
    const {loading, error, orders} = orderList

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin


    useEffect(() => {
        if(userInfo && userInfo.isAdmin){
            dispatch(listOrders())
        } else{
            navigate("/login")
        }
    }, [dispatch, navigate, userInfo])

  return (
    <div>
        <h1>Orders</h1>
        {loading ? <Loader/> : error ? <Messages variant='danger'>{error}</Messages>
        :
        <Table striped responsive className="table-sm">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Paid</th>
                    <th>Delivered</th>
                </tr>
            </thead>

            <tbody>
                {orders.map(order => (
                    <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.user && order.user.name}</td>
                        <td>{ order.createdAt}</td>
                        <td>{order.totalPrice}</td>
                        <td>{order.isPaid ? order.paidAt :
                        <i className='fas fa-times'/>}</td>
                        <td>{order.isDelivered ? order.deliveredAt :
                        <i className='fas fa-times'/>}</td>
                        
                        <td>
                            <LinkContainer to={`/orders/${order._id}`}>
                                <Button className="btn w-100">
                                    Details
                                </Button>
                            </LinkContainer>
                        </td>
                        
                    </tr>
                ))}
            </tbody>
        </Table>
        }
        
    </div>
  )
}

export default OrderListScreen
