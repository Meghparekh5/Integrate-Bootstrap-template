import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../App.css";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    classType: "",
    message: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.classType) {
      setError("Please fill all required fields");
      return;
    }

    setError("");
    console.log("Form Submitted:", formData);

    alert("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      classType: "",
      message: ""
    });
  };

  return (
    <section className="contact-section py-120">
      <Container>
        <Row className="align-items-center">

          <Col lg={6}>
            <div className="contact-left">
              <h2 className="main-heading">
                We are here for help you! To <br /> Shape Your Body.
              </h2>

              <p className=" mt-4" style={{color:"#646464"}}>
               when an unknown printer took a galley of type and scrambled it to make a <br /> type specimen book. It has survived not only five centuries, but also the leap <br /> into electronic types etting.type specimen It has survived not only five <br /> centuries, but also the type specimen book.
              </p>

              <Row className="mt-4">
                <Col md={6}>
                  <h5 >New York City, USA</h5>
                  <div className="underline" ></div>
                  <p style={{fontSize:"15px",color:"#646464"}}>85 Briston Mint Street,<br />London, E1 8LG, USA</p>
                </Col>

                <Col md={6}>
                  <h5>Opening Hours</h5>
                  <div className="underline"></div>
                  <p style={{fontSize:"15px",color:"#646464"}}>Mon to Fri: 7:30 am – 1:00 am<br />Mon to Fri: 7:30 am – 1:00 am</p>
                </Col>

                <Col md={6} className="mt-4">
                  <h5>Information</h5>
                  <div className="underline"></div>
                  <p style={{fontSize:"15px",color:"#646464"}}>+800-123-4567<br />gymat@yourname.com</p>
                </Col>

                <Col md={6} className="mt-4">
                  <h5>Follow Us On</h5>
                  <div className="underline"></div>
                  <div className="social-icons-dark">
                    <span>f</span>
                    <span>x</span>
                    <span>in</span>
                    <span>p</span>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={6}>
            <div className="contact-form-box">
              <h4>Leave Us Your Info</h4>
              <div className="underline"></div>

              <Form className="mt-4" onSubmit={handleSubmit}>

                {error && (
                  <p style={{ color: "red", marginBottom: "10px" }}>
                    {error}
                  </p>
                )}

                <Form.Control
                  name="name"
                  placeholder="Full Name*"
                  className="mb-3"
                  value={formData.name}
                  onChange={handleChange}
                />

                <Form.Control
                  name="email"
                  type="email"
                  placeholder="E-mail Address*"
                  className="mb-3"
                  value={formData.email}
                  onChange={handleChange}
                />

                <Form.Select
                  name="classType"
                  className="mb-3"
                  value={formData.classType}
                  onChange={handleChange}
                >
                  <option value="">Select Class</option>
                  <option>Yoga</option>
                  <option>Fitness</option>
                  <option>Boxing</option>
                </Form.Select>

                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Comment"
                  className="mb-3"
                  value={formData.message}
                  onChange={handleChange}
                />

                <Button type="submit" className="submit-btn">
                  SUBMIT NOW
                </Button>

              </Form>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default ContactInfo;