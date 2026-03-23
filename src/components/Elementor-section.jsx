import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const Elementorsection = () => {
  const brands = [<img src="src/assets/Images/Elementor-section-img-1.png" alt="" />, <img src="src/assets/Images/Elementor-section-img-2.png" alt="" />, <img src="src/assets/Images/Elementor-section-img-3.png" alt="" />, <img src="src/assets/Images/Elementor-section-img-4.png" alt="" />, <img src="src/assets/Images/Elementor-section-img-5.png" alt="" />];

  return (
    <section className="Elementor-section">
      <Container>
        <Row className="align-items-center text-center">
          {brands.map((item, index) => (
            <Col key={index}>
              <h3 className="Elementor-text">{item}</h3>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Elementorsection;