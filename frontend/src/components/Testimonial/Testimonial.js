import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="tesimonial-part">
      <Container>
        <Row>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>

            <div>
              <h3>2</h3>
            </div>

            <div>
              <h3>3</h3>
            </div>

            <div>
              <h3>4</h3>
            </div>
          </Slider>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
