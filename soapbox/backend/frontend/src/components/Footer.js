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

// import "./footer.css";
// import styled from "styled-components";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// const ContactFooter = () => {
//   return (
//     <Box>
//       {/* <h1 style={{ color: "black",
//                      textAlign: "center",
//                      marginTop: "-50px" }}>
//           J & S SOAPBOX
//         </h1> */}
//       <Container>
//         <Row>
//           <Column>
//             <Heading>Location</Heading>
//             <FooterLink
//               target="_blank"
//               href="http://maps.google.com/maps?q=Batesville,+MS+38606"
//             >
//               We are located in Batesville, MS
//             </FooterLink>
//           </Column>
//           <Column>
//             <Heading>Services</Heading>
//             <FooterLink href="#">Bulk Order</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Social Media</Heading>
//             <FooterLink href="https://www.facebook.com/jssoapbox">
//               <i className="fab fa-facebook-f">
//                 <span style={{ marginLeft: "10px" }}>Facebook</span>
//               </i>
//             </FooterLink>
//             <FooterLink href="https://instagram.com/jssoapbox?igshid=MzRlODBiNWFlZA==">
//               <i className="fab fa-instagram">
//                 <span style={{ marginLeft: "10px" }}>Instagram</span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-twitter">
//                 <span style={{ marginLeft: "10px" }}>Twitter</span>
//               </i>
//             </FooterLink>
//           </Column>
//           {/* <Column>
//             <FooterLink className="box-logo" href="/">
//               <img src="../nav-images/soapbox_box.png" alt="logo" width={200} />
//             </FooterLink>
//             <p>Copyright &copy; J & S SoapBox</p>
//           </Column> */}
//         </Row>
//       </Container>
//     </Box>
//   );
// };
// export default ContactFooter;

// // Styles
// export const Box = styled.div`
//   padding: 60px 40px;
//   background: #f2efdf;

//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 25%;

//   @media (max-width: 1000px) {
//     padding: 70px 30px;
//   }
// `;

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   max-width: 1000px;
//   margin: 0 auto;
//   /* background: red; */
// `;

// export const Column = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: left;
//   margin-left: 70px;
// `;

// export const Row = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
//   grid-gap: 20px;

//   @media (max-width: 1000px) {
//     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   }
// `;

// export const FooterLink = styled.a`
//   color: #2b3174;
//   margin-bottom: 20px;
//   font-size: 18px;
//   font-family: "Montserrat", sans-serif;
//   text-decoration: none;

//   &:hover {
//     color: #cbb7d9;
//     transition: 200ms ease-in;
//   }
// `;

// export const Heading = styled.p`
//   font-size: x-large;
//   color: #986dc2;
//   margin-bottom: 40px;
//   /*font-weight: bold;*/
// }
// `;
