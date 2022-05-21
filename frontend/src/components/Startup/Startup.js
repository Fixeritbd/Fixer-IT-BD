import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Startup.css";
import StartupItem from "./StartupItem";

const Startup = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    let startupdata = async () => {
      let { data } = await axios.get("http://localhost:8000/startup");
      setData(data);
    };
    startupdata();
  }, []);
  return (
    <div className="startup-part">
      <Container>
        <div className="startup-heading">
          <h3>What We Can Do For You</h3>
          <h2>Design startup movement</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page
            when looking at its layout
          </p>
        </div>
        <Row>
          {data.map((item) => (
            <Col lg={3}>
              <StartupItem img={item.img} counterNumber={item.couterNumber} subheading={item.subheading} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Startup;
