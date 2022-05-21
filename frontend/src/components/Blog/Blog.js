import React from "react";
import "./Blog.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import BlogCart from "./BlogCart";
const Blog = () => {
  return (
    <div className="blog">
      <Container>
        <div className="title">
          <div className="subheading">
            <p>OUR BLOG</p>
          </div>
          <div className="heading">
            <h3>Our latest updates</h3>
          </div>
          <div className="paragrahp">
            <p>
              Simply drag and drop photos and videos into your workspace to
              automatically <br />
              add them to your Collab Cloud library.
            </p>
          </div>
        </div>
        <Row>
          <Col lg={4}>
            <BlogCart />
          </Col>
          <Col lg={4}>
            <BlogCart />
          </Col>
          <Col lg={4}>
            <BlogCart />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
