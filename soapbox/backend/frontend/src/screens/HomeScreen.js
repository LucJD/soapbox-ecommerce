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
        <Row>
          <Col xs={6} lg={3} className="best-sellers">
            sm=true
          </Col>
          <Col xs={6} lg={3} className="best-sellers">
            sm=true
          </Col>
          <Col xs={6} lg={3} className="best-sellers">
            sm=true
          </Col>
          <Col xs={6} lg={3} className="best-sellers">
            sm=true
          </Col>
        </Row>
        <h1 className="title">About us</h1>
        <Col xs={12} className="profiles">
          <div className="text-with-icons__block text-center">
            <img
              className="about-pic"
              src={require("../js-images/sarah.jpg")}
              alt="Sarah"
            />
            <h2 className="title-name">Sarah</h2>
            <p className="profile">
              {`Welcome to my about me page! I'm thrilled to share a glimpse into my
                life's journey and passion for education and crafting handmade soap.
                As a wife and mom to eight wonderful children, my life is a joyful
                whirlwind of love and laughter. With over 20 years of experience in
                the education field, I hold a master's degree in teaching, which has
                allowed me to impact countless young minds positively. Witnessing
                the growth and development of my students has been immensely
                rewarding, and I cherish the opportunity to shape their futures.
                However, my passion for creating handmade soap stems from a deeply
                personal experience. Growing up, my siblings struggled with
                sensitive skin, and when I became a mother, I discovered that my
                children shared the same delicate skin and allergies. Determined to
                find a solution, I delved into the world of soap-making. Crafting
                each soap bar by hand not only became a creative outlet but also
                empowered me to take control of what my family puts on their skin.
                By carefully selecting natural ingredients, I ensure our handmade
                soaps are free from harsh chemicals and irritants. This knowledge
                brings me immense satisfaction and peace of mind, knowing I can
                provide a safe and nurturing experience for my loved ones. Through
                my journey as an educator and soap maker, I've come to appreciate
                the importance of understanding the ingredients and processes
                involved in our products. I hope to extend this knowledge to others,
                guiding them toward a healthier and more conscious lifestyle. Thank
                you for visiting my page, and I invite you to explore further to
                discover the wonders of handmade soap and the boundless joys of
                education.`}
            </p>
          </div>
        </Col>
        <Col xs={12} className="profiles">
          <div className="text-with-icons__block text-center">
            <img
              className="about-pic"
              src={require("../js-images/jojo.jpg")}
              alt="Jo jo"
            />
            <h2 className="title-name">Jo Jo</h2>
            <p className="profile">
              {`With a rich background spanning 17 years in the retail industry, I
                bring a wealth of experience and a keen understanding of customer
                needs to my newest venture. Motivated by personal experiences, my
                decision to delve into creating handmade soap stems from the
                challenges my family's sensitive skin has posed. This journey
                reflects my dedication to addressing a real-world concern and
                offering a solution that prioritizes quality and care. My transition
                from retail to crafting skincare products showcases my adaptability
                and commitment to providing products that truly resonate with my
                customers.`}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;
