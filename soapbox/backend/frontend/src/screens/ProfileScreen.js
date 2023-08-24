import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserProfile } from "../actions/userActions";
import { getUserDetails } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

import { useEffect, useState } from "react";

import { listMyOrders } from "../actions/orderActions";
import { Row, Col, Button, Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Messages from "../components/Messages";
import Loader from "../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { LinkContainer } from "react-router-bootstrap";

function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const myOrders = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = myOrders;

  // const orderListMy = use

  useEffect(() => {
    if (!userInfo) {
      navigate("login");
    } else {
      if (!user || !user.name || success) {
        dispatch({
          type: USER_UPDATE_PROFILE_RESET,
        });
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, userInfo, user, success]);

  const submitHandler = (e) => {
    console.log(user._id);
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          name: name,
          email: email,
          password: password,
        })
      );
      setMessage("");
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2 className="products-title">User Profile</h2>
        {message && <Messages variant="danger">{message}</Messages>}
        {error && <Messages variant="danger">{error}</Messages>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Update Information
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2 className="products-title">My Orders</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Messages variant="danger">{errorOrders}</Messages>
        ) : (
          <Table striped responsive className="table-sm">
            <thead>
              <tr>
                <th className="table-text-color">ID</th>
                <th className="table-text-color">Date</th>
                <th className="table-text-color">Total</th>
                <th className="table-text-color">Paid</th>
                <th className="table-text-color">Delivered</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
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
      </Col>
    </Row>
  );
}

export default ProfileScreen;
