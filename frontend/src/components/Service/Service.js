import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Service.css";
import axios from "axios";
import ServiceItem from "./ServiceItem";

const Service = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let serviceDeatils = async () => {
      let { data } = await axios.get("http://localhost:8000/service");
      setData(data);
    };
    serviceDeatils();
  }, []);
  return (
    <div className="service-part">
      <Container>
        <div className="service-heading">
          <h3>What We Can Do For You</h3>
          <h2>Services we can help you with</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page
            when looking at its layout
          </p>
        </div>
        <Row style={{ paddingTop: "25px" }}>
          {data.map((item) => (
            <Col lg={4}>
              <ServiceItem title={item.title} icon={item.icon} para={item.para} btn={item.btn} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Service;
