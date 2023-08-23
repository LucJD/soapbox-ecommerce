import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";

function About() {
  return (
    <Container>
      <h1 className="about-title">About us</h1>
      <Row>
        <Col xs={12} lg={12} className="cent">
          <div className="pic-centering">
            <img
              className="about-pic"
              src={require("../js-images/sarah.jpg")}
              alt="Sarah"
              width={400}
            />
          </div>
          <h2 className="text-center about-title">Sarah</h2>
          <p className="about-text">
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
        </Col>
        <Col xs={12} lg={12}>
          <div className="pic-centering">
            <img
              className="about-pic"
              src={require("../js-images/jojo.jpg")}
              alt="Jo jo"
              width={400}
            />
          </div>
          <h2 className="about-title">Jo Jo</h2>
          <p className="about-text">
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
        </Col>
      </Row>
    </Container>
  );
}

export default About;
