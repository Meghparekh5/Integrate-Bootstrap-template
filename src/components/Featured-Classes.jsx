import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "../App.css";

const classes = [
  {
    title: "Fitness",
    subtitle: "The Best Body Fitness in Town",
    img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
    time: "Monday 8:00 am",
  },
  {
    title: "Yoga",
    subtitle: "The Best Body Fitness in Town",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    time: "Tuesday 10:00 am",
  },
  {
    title: "Body Building",
    subtitle: "The Best Body Fitness in Town",
    img: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
    time: "Monday 12:00 pm",
  },
  {
    title: "Boxing",
    subtitle: "The Best Body Fitness in Town",
    img: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba",
    time: "Friday 2:00 pm",
  },
  {
    title: "Running",
    subtitle: "The Best Body Fitness in Town",
    img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
    time: "Monday 6:00 pm",
  },
  {
    title: "Crossfit",
    subtitle: "The Best Body Fitness in Town",
    img: "src/assets/Images/c12-570x456.jpg",
    time: "Tuesday 8:00 pm",
  },
];

const FeaturedClasses = () => {
  return (
    <div className="featured-section d-flex align-items-center py-250" style={{ backgroundImage: "url(src/assets/Images/shape-47.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <Container>
        <div className="text-center mb-5">

          <h2 className="lead text-center text-white mb-3" style={{ color: "#cbcbcb", fontSize: "16px", border: "1px solid none", backgroundColor: "#ff0336", borderRadius: "5px", padding: "10px", width: "228px", margin: "0px auto" }}>Find Your Body</h2>
          <h2 className="featured-title" >Our Featured Classes</h2>
          <p className="featured-subtitle">
            Gymat an unknown printer took a galley of type and scrambled <br />
            make a type specimen book.
          </p>
        </div>

        <Row>
          {classes.map((item, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="class-card h-100">
                <div className="class-img-wrapper">
                  <Card.Img
                    variant="top"
                    src={item.img}
                    className="class-img"
                  />
                  <span className="class-time">{item.time}</span>
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="class-title">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="class-text">
                    {item.subtitle}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedClasses;