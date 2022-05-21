import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import TesItem from "./TesItem";
import "./Testimonial.css";
const Testimonial = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    let startupdata = async () => {
      let { data } = await axios.get("http://localhost:8000/testimonial");
      setData(data);
    };
    startupdata();
  }, []);
  return (
    <div className="tesimonial-part">
      <Container>
        <div className="tesimonial-heading">
          <h3>TESTIMONIALS</h3>
          <h2>What people say</h2>
          <p>
            Simply drag and drop photos and videos into your workspace to automatically add them to your
            Collab Cloud library.
          </p>
        </div>
        <Row>
          {data.map((item) => (
            <Col lg={4}>
              <TesItem
                name={item.name}
                itemImg={item.itemImg}
                manImg={item.manImg}
                para={item.para}
                designation={item.designation}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
