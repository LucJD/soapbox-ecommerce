import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Shop() {
  return (
    <Container>
      <Row>
        <Col xs={6} lg={4}>
          product 1
        </Col>
        <Col xs={6} lg={4}>
          product 2
        </Col>
        <Col xs={6} lg={4}>
          product 3
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;
