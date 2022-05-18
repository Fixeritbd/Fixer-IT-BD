import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./banner.css";
import bannerShape from './bannerShape.png'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaBehance } from 'react-icons/fa';


export default function Banner() {
  let [banner, setBanner] = useState([]);
  useEffect(() => {
    let logodetails = async () => {
      let { data } = await axios.get("http://localhost:8000/banner");
      setBanner(data);
    };
    logodetails();
  }, []);
  return (
    <div>
      <div className="banner_main">
        <div className="socialIconMain">
          <div className="socialIcon">
            <ul>
              <li><a href='facebook'><FaFacebookF /></a></li>
              <li><a href='linkedin'><FaLinkedinIn /></a></li>
              <li><a href='github'><FaGithub /></a></li>
              <li><a href='behance'><FaBehance /></a></li>
            </ul>
          </div>

        </div>
        <Container>
          {banner.map(item => (
            <Row>
              <Col lg={6}>
                <div className="banner_text">
                  <h3 className="subHeading">{item.subHeading}</h3>
                  <h1 className="heading">{item.heading}</h1>
                  <Button className="button bannerBtn ">{item.button}</Button>
                </div>
              </Col>
              <Col lg={6}>
                <div className="banner_img">
                  <img src={item.img} alt='banner-img' />
                </div>
              </Col>
            </Row>
          ))}

        </Container>

        <div className="bannerShape">
          <img src={bannerShape} alt="banner-Shape-img" />
        </div>
      </div>
    </div>
  );
}


// raihan................