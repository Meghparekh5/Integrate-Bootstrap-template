import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../App.css";

const BlogSection = () => {
  const blogs = [
    {
      date: "21.03.22",
      title: "Everything You Need To Know About Fitness",
      text: "Authoritatively disseminate multimedia  based total linkage through market-driven methodolContinually transform"
    },
    {
      date: "22.03.22",
      title: "Keep Your Body It’s Best",
      text: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform"
    },
    {
      date: "22.03.22",
      title: "Get off your butt and exercise, orders your doc",
      text: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform"
    }
  ];

  return (
    <section className="blog-section py-120">
      <Container>
        <div className="text-center mb-5">
                    <h2 className="lead text-center text-white mb-3" style={{ color: "#cbcbcb", fontSize: "16px", border: "1px solid none", backgroundColor: "#ff0336", borderRadius: "5px", padding: "10px", width: "228px", margin: "0px auto" }}>Latest Blog </h2>
          <h2>Our Recent News</h2>
          <p>Gymat an unknown printer took a galley of type and scrambled <br />a type specimen book.</p>
        </div>
        <Row>
          {blogs.map((item, index) => (
            <Col md={4} key={index}>
              <div className="blog-card">
                <span className="date">{item.date}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <Button className="read-btn"> <span>READ MORE →</span></Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;