import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./AboutStyle.css";

const AboutPart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let logodetails = async () => {
      let { data } = await axios.get("http://localhost:8000/about");
      setData(data);
    };
    logodetails();
  }, []);
  console.log(data);
  return (
    <div className="about-part">
      <Container>
        <Row>
          {data.map((item) => (
            <>
              <Col lg={6}>
                <div className="about-img">
                  <img src={item.img} alt="" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="about-text">
                  <div className="about-heading">
                    <h3>{item.subheading}</h3>
                    <h2>{item.heading}</h2>
                  </div>
                  <div className="about-details">
                    <p>{item.para1}</p>
                    <p className="mt-4">{item.para2}</p>
                  </div>
                  <div className="buttons">
                    <Button className="button">{item.btn}</Button>
                  </div>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutPart;
