import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import logo from "./logo.png";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaBehance, FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer-part">
      <Container>
        <div className="footer-heading">
          <div>
            <h3>JOIN OUR COMMUNITY</h3>
            <h2>Subscribe for newsletter</h2>
          </div>
          <div className="inpuBtn">
            <div>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <Row>
          <Col lg={4}>
            <div className="fItem">
              <div className="logoItem">
                <img src={logo} alt="footer-logo" />
              </div>
              <p>
                Simply drag and drop photos and videos into your workspace to automatically add them to your
                Collab Cloud library.
              </p>
              <div className="footer-icon">
                <ul>
                  <li>
                    <a href="facebook">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="linkedin">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="github">
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a href="behance">
                      <FaBehance />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={2}>
            <div className="footer-text">
              <h3>Services</h3>
              <p>Web Development</p>
              <p>Web App Development</p>
              <p>Online marketing</p>
              <p>Business</p>
              <p>Technology</p>
              <p>Content strategy</p>
            </div>
          </Col>
          <Col lg={2}>
            <div className="footer-text">
              <h3>Company</h3>
              <p>About</p>
              <p>Services</p>
              <p>Portfolio</p>
              <p>Blog</p>
              <p>Contact us</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="footer-text">
              <h3>Stay Connected</h3>
              <p>Dhaka, Bangladesh</p>
              <p>
                <FaPhoneAlt className="icon" /> +880-1849-23-88-32
              </p>
              <p>
                <SiMinutemailer className="icon" /> fixeritbd@gmail.com
              </p>
            </div>
          </Col>
        </Row>
        <p className="copyright">Copyright © 2022 fixeritbd</p>
      </Container>
    </div>
  );
};

export default Footer;
