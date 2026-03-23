import { Container, Carousel, Row, Col, Button } from "react-bootstrap";
import { useRef } from "react";
import img1 from "../assets/Images/gall35-1.jpg";
import img2 from "../assets/Images/gallery11.jpg";
import img3 from "../assets/Images/gallery13.jpg";
import img4 from "../assets/Images/gallery15.jpg";
import img5 from "../assets/Images/gg.jpg";
import img6 from "../assets/Images/gallery8.jpg";
import img7 from "../assets/Images/gallery9.jpg";
import img8 from "../assets/Images/gallery10.jpg";

function GallerySlider() {

  const carouselRef = useRef();

  return (
    <section className="py-120 gallery-section">
      <Container className="position-relative">

        <Button
          className="slider-btn left-btn"
          onClick={() => carouselRef.current.prev()}
        >
          Prev
        </Button>

        <Button
          className="slider-btn right-btn"
          onClick={() => carouselRef.current.next()}
        >
          Next
        </Button>

        <Carousel
          indicators={false}
          controls={false}
          interval={3000}
          ref={carouselRef}
        >

          <Carousel.Item>
            <div className="gallery-row">
              <img src={img1} className="gallery-img" />
              <img src={img2} className="gallery-img" />
              <img src={img3} className="gallery-img" />
              <img src={img4} className="gallery-img" />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="gallery-row">
              <img src={img5} className="gallery-img" />
              <img src={img6} className="gallery-img" />
              <img src={img7} className="gallery-img" />
              <img src={img8} className="gallery-img" />
            </div>
          </Carousel.Item>

        </Carousel>

      </Container>
    </section>
  );
}

export default GallerySlider;