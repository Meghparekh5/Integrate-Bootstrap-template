import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const BrandSection = () => {
  const brands = [<img src="src/assets/Images/brand-7.png" alt="" />, <img src="src/assets/Images/brand-6.png" alt="" />, <img src="src/assets/Images/brand-8.png" alt="" />, <img src="src/assets/Images/brand-10.png" alt="" />, <img src="src/assets/Images/brand-6.png" alt="" />];

  return (
    <section className="brand-section">
      <Container>
        <Row className="align-items-center text-center">
          {brands.map((item, index) => (
            <Col key={index}>
              <h3 className="brand-text">{item}</h3>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BrandSection;