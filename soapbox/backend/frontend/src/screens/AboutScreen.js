import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

function AboutScreen() {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary background-image">
      <div className="form_container p-5 rounded bg-white">
        <Form>
          <h1 className="text-center signIn-color">Sign In</h1>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />

            <Col xs="auto" className="d-grid">
              <Button type="submit" className="btn btn-primary">
                Submit
              </Button>
            </Col>
            <Row className="py-3">
              <Col>
                New Customer?{" "}
                <Link
                  className=" text-right register-color"
                  to={"#"} // to={redirect ? `/register?redirect=${redirect}` : "/register"}
                >
                  Register
                </Link>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default AboutScreen;
