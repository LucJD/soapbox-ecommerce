import "./footer.css";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavbarBrand } from "react-bootstrap";

export default function ContactFooter() {
  return (
    <footer>
      <Container className="js-footer" fluid>
        <Container>
          <Row className="first-row">
            <Col xs={12} lg={3} className="first-column">
              <Row>
                <h3 className="footer-titles">Location</h3>
              </Row>
              <Row>
                <p className="footer-texts">We are located in Batesville, MS</p>
              </Row>
              <Row>
                <p className="footer-texts">Email: jssoapbox@gmail.com</p>
              </Row>
            </Col>
            <Col xs={12} lg={3} className="second-column">
              <Row>
                <h3 className="footer-titles">Services</h3>
              </Row>
              <Row>
                <a href="/contact">
                  <p className="js-footer-lin">Bulk Orders</p>
                </a>
              </Row>
              <Row>
                <a href="/contact">
                  <p className="js-footer-lin">Custom Orders</p>
                </a>
              </Row>
            </Col>
            <Col xs={12} lg={3} className="third-column">
              <Row>
                <h3 className="footer-titles">Social Media</h3>
              </Row>
              <Row className="socials-m-icons">
                <Col className="fb-row">
                  <a href="https://www.facebook.com/jssoapbox">
                    <img
                      src={require("../js-images/socials-icon-fb.png")}
                      alt="fb"
                      width={30}
                    />
                  </a>
                </Col>
                <Col className="ig-row">
                  <a href="https://instagram.com/jssoapbox?igshid=MzRlODBiNWFlZA==">
                    <img
                      className="socials-icons"
                      src={require("../js-images/socials-icon-ig.png")}
                      alt="ig"
                      width={30}
                    />
                  </a>
                </Col>
                <Col className="x-row">
                  <a href="https://twitter.com">
                    <img
                      className="socials-icons"
                      src={require("../js-images/socials-icon-x.png")}
                      alt="x"
                      width={30}
                    />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={3}>
              <a href="/">
                <img
                  className=".box-logo"
                  src={require("../nav-images/soapbox_box.png")}
                  alt="logo"
                  width={300}
                />
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="text-center py-3 copy-bottom">
              Copyright &copy; J&S SoapBox
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}
