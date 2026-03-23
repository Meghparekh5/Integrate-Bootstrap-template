import { Container } from "react-bootstrap";

function Map() {
  return (
    <div className="Map">
      <Container fluid>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842386.243310165!2d22.381167671814943!3d45.91595178521182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff26958976c3%3A0x84ef4f92a804b194!2sRomania!5e0!3m2!1sen!2sin!4v1773990834243!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </Container>
    </div>
  );
}

export default Map;