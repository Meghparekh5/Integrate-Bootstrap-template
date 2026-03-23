import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import bannerImg from "../assets/Images/banner.jpg";
import shapeImg from "../assets/Images/shape-113.png";

function AboutClass() {
  return (
    <section
      className="about-banner py-250"
      style={{
        backgroundImage: `url(${bannerImg})`
      }}
    >
      <img src={shapeImg} alt="shape" className="banner-shape" />

      <Container>
        <Row>
          <Col lg={6}>
            <h1 className="about-title">Class Layout</h1>

            <div className="breadcrumb-box">
              <Link to="/">Gymate</Link>
              <span> - Class Layout</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutClass;