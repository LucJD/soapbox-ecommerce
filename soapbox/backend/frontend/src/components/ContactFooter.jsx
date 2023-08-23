import styled from "styled-components";

const ContactFooter = () => {
    return (
      <Box>
        {/* <h1 style={{ color: "black", 
                     textAlign: "center", 
                     marginTop: "-50px" }}>
          J & S SOAPBOX
        </h1> */}
        <Container>
          <Row>
            <Column>
              <Heading>Location</Heading>
              <FooterLink target="_blank" href="http://maps.google.com/maps?q=Batesville,+MS+38606">We are located in Batesville, MS</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href="/#/contact">Bulk Order</FooterLink>
              
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="https://www.facebook.com/jssoapbox">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>
                    Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="https://instagram.com/jssoapbox?igshid=MzRlODBiNWFlZA==">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>
                    Instagram
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>
                    Twitter
                  </span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    );
  };
  export default ContactFooter;

// Styles
export const Box = styled.div`
  padding: 60px 40px;
  background: #f2efdf;

  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;


  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 70px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: black;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: sans-serif;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: purple;
  margin-bottom: 40px;
  font-weight: bold;
}
`;