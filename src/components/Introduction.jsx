import React from "react";
import '../App.css';
import { Container, Row, Col } from "react-bootstrap";

const FitnessSection = () => {
  return (
    <section className="fitness-section py-250" >
      <Container>
        <Row className="align-items-center">
          
          <Col md={6} className="position-relative text-center mb-4 mb-md-0">
            <div className="image-wrapper">
              <img
                src="src/assets/Images/about-2.jpg"
                alt="fitness"
                className="img-fluid main-img" style={{width:"541px" , height:"592px" , backgroundSize:"cover"}}
              />

              <div className="quote-box d-flex">
                <span className="quote-icon"><img src="src/assets/Images/shape-70.png" alt="" /></span>
                <h4>
                  We can help you to overcome the fears and obstacles in your life.
                </h4>
              </div>
            </div>
          </Col>
          <Col md={6}>
           <h2 className="lead text-center text-white" style={{color:"#cbcbcb" ,fontSize:"16px", border:"1px solid none", backgroundColor:"#ff0336",borderRadius:"5px",padding:"10px" ,width:"228px"}}>Let's Introduces</h2>
            

            <h1 className="main-heading  mb-4">
              Take Your Health And <br />
              Fitness <span style={{fontFamily:"Montserrat"}}>To New Level</span> of Heights!
            </h1>

            <h5 className=" mb-4">
             Lorem ipsum dolor sit amet, consectetur adipis <br /> cing elit sed do eiusmod tempor incididunt dolore <br />magna aliqua minim veniam.
            </h5>

            <p className="desc-text" style={{fontSize:"16px"}}>
              Gymat an unknown printer took a galley of type and scr arsry mbled it to <br />make a type specimen book. It has survived notte only five centuries, but <br />also the leap into electronic types ear tting rey emaining  essentially <br />unchanged. It was popularised in the 1960s with the release of Letraset.


            </p>

            <div className="signature mt-4">
              <p><img src="src/assets/Images/shape-69.png" alt="" /></p>
              <h5 style={{color:"#646464"}}>Mr. Johon Smith - Founder</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FitnessSection;