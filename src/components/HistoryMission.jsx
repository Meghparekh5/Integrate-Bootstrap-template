import { Container, Row, Col } from "react-bootstrap";
import { TbTargetArrow } from "react-icons/tb";
import { LuGoal } from "react-icons/lu";
import img1 from "../assets/Images/about-3.jpg";
import img2 from "../assets/Images/about-4.jpg";

function HistoryMission() {
  return (
    <section className="py-120" style={{ background: "#f5f5f5" }}>
      <Container>

        <Row className="justify-content-center">
          <Col lg={4}>
            <div className="hm-box text-center">
              <TbTargetArrow className="hm-icon mb-3" />
              <h4>Our History</h4>
              <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat.
              </p>
            </div>
          </Col>

          <Col lg={4}>
            <img src={img1} alt="img" className="hm-img" />
          </Col>
        </Row>

        <Row className="justify-content-center mt-0">
          <Col lg={4}>
            <img src={img2} alt="img" className="hm-img" />
          </Col>

          <Col lg={4}>
            <div className="hm-box text-center">
              <LuGoal className="hm-icon mb-3" />
              <h4>Our Mission</h4>
              <p>
               Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat.
              </p>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default HistoryMission;