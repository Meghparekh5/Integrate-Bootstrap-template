import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaClock, FaDumbbell, FaCapsules, FaCalendarAlt } from "react-icons/fa";
import "../App.css";

const ProgressSection = () => {
  const data = [
    {
      icon: <FaClock />,
      title: "PROGRESSION",
      text: "Vestibulumipsum primis in faucibus orci luctus et ultrices posuere Curae onces"
    },
    {
      icon: <FaDumbbell />,
      title: "WORKOUT",
      text: "Vestibulumipsum primis in faucibus orci luctus et ultrices posuere Curae onces"
    },
    {
      icon: <FaCapsules />,
      title: "NUTRITION",
      text: "Vestibulumipsum primis in faucibus orci luctus et ultrices posuere Curae onces"
    },
    {
      icon: <FaCalendarAlt />,
      title: "DAILY CHART",
      text: "Vestibulumipsum primis in faucibus orci luctus et ultrices posuere Curae onces"
    }
  ];

  return (
    <section className="progress-section" style={{padding:"120px 0"}}>
      <Container>
        <Row>
          {data.map((item, index) => (
            <Col md={3} key={index} className="text-center progress-item">
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProgressSection;