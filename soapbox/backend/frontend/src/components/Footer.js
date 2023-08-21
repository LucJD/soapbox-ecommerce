import React from "react";

import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="text-dark">
        <Row>
          <Col className="bg-body-tertiary text-center py-3">
            Copyright &copy; J&S SoapBox
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
