import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center ">
          <Col md={4} className="footer-left">
            <div className="footer-logo">
              <a href="/">
             <p> <img src="src/assets/Images/gymat_light-1.svg" alt="" /></p>
             </a>
            </div>
          </Col>

                <Col md={4}>
                  <div className="social-icons">
                    <span>f</span>
                    <span>x</span>
                    <span>in</span>
                    <span>p</span>
                  </div>
                </Col>

          <Col md={4} className="text-end footer-right">
          <a href="/">
            <p>© 2025 Gymat. All Rights Reserved By RadiusTheme</p>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;