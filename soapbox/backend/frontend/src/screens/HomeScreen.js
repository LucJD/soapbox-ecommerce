import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "./homeScreen.css";

function HomeScreen() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../js-images/everything-1.jpg")}
                alt="First-slide"
              />
              <Carousel.Caption>
                <p className="font-size">Welcome to Soapbox</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../js-images/everything-2.jpg")}
                alt="Second-slide"
              />
              <Carousel.Caption>
                <p className="font-size">Welcome to Soapbox</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../js-images/everything-3.jpg")}
                alt="Third-slide"
              />
              <Carousel.Caption>
                <p className="font-size">Welcome to Soapbox</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12}>
          <h1 className="title">
            We Run a Family Oriented Business Everything We Make is Handmade
            with Love.
          </h1>
          <p className="mission">
            As our family has struggled with sensitive skin we handcraft all of
            our products with the utmost care to provide you with a wonderful
            smelling and safe for sensitive skin products.
          </p>
        </Col>
        <Col xs={12} lg={6} className="f-and-o-icons">
          <div className="text-with-icons__block text-center">
            <img
              className="family-icon"
              src={require("../js-images/icon_family.png")}
              alt="Family Icon"
              width={175}
            />
            <p className="mission">
              Sarah and Jojo are sisters, they started out making products for
              their family. Once you become a customer you become family.
            </p>
          </div>
        </Col>
        <Col xs={12} lg={6} className="f-and-o-icons">
          <div className="text-with-icons__block text-center">
            <img
              className="organic-icon"
              src={require("../js-images/icon_organic.png")}
              alt="Organic Icon"
              width={175}
            />
            <p className="mission">
              We make it our mission to use only the best ingredients. Rest
              assured that you will be purchasing the best products for
              sensitive skin.
            </p>
          </div>
        </Col>
        <Row className="text-with-icons__block text-center">
          <h1 className="title">Our Best Sellers</h1>
          <Col xs={12} lg={3} className="bestseller">
            <img
              className="mb-bar"
              src={require("../js-images/bestSeller-MellonBaller-barSoap.jpg")}
              alt="Bar soap"
              width={300}
            />
            <h3 className="item-title">Mellon Baller Bar Soap</h3>
            <p className="item-description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti
            </p>
          </Col>
          <Col xs={12} lg={3} className="bestseller">
            <img
              className="mb-wax"
              src={require("../js-images/bestSeller-MellonBaller-waxMelt.jpg")}
              alt="Bar soap"
              width={300}
            />
            <h3 className="item-title">Mellon Baller Wax Melt</h3>
            <p className="item-description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti
            </p>
          </Col>
          <Col xs={12} lg={3} className="bestseller">
            <img
              className="rc-wax"
              src={require("../js-images/bestSeller-roughCut-waxMelt.jpg")}
              alt="Bar soap"
              width={300}
            />
            <h3 className="item-title">Rough Cut Wax Melt</h3>
            <p className="item-description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti
            </p>
          </Col>
          <Col xs={12} lg={3} className="bestseller">
            <img
              className="ut-oil"
              src={require("../js-images/bestSeller-undertow-beardOil.jpg")}
              alt="Bar soap"
              width={300}
            />
            <h3 className="item-title">Undertow Beard Oil</h3>
            <p className="item-description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default HomeScreen;
