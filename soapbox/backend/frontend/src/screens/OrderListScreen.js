import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Messages from "../components/Messages";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { listOrders } from "../actions/orderActions";
import "./productList.css";

function OrderListScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <div>
      <h1 className="products-title">Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Messages variant="danger">{error}</Messages>
      ) : (
        <Table striped responsive className="table-sm">
          <thead>
            <tr>
              <th className="table-text-color">ID</th>
              <th className="table-text-color">User</th>
              <th className="table-text-color">Date</th>
              <th className="table-text-color">Total</th>
              <th className="table-text-color">Paid</th>
              <th className="table-text-color">Delivered</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr className="table-text-color" key={order._id}>
                <td className="table-text-color">{order._id}</td>
                <td className="table-text-color">
                  {order.user && order.user.name}
                </td>
                <td className="table-text-color">{order.createdAt}</td>
                <td className="table-text-color">{order.totalPrice}</td>
                <td className="table-text-color">
                  {order.isPaid ? order.paidAt : <i className="fas fa-times" />}
                </td>
                <td className="table-text-color">
                  {order.isDelivered ? (
                    order.deliveredAt
                  ) : (
                    <i className="fas fa-times" />
                  )}
                </td>

                <td>
                  <LinkContainer to={`/orders/${order._id}`}>
                    <Button className="btn w-100">Details</Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default OrderListScreen;
