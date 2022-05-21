import React from "react";
import "./Blog.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import BlogCart from "./BlogCart";
import blogcard from "./blogcircle.png";

const Blog = () => {
  return (
    <div className="blog">
      <div className='blog_circle'>
        <img src={blogcard} alt="" />
      </div>
      <Container>
        <div className="title">
          <div className="subheading">
            <h3>OUR BLOG</h3>
          </div>
          <div className="heading">
            <h2>Our latest updates</h2>
          </div>
          <div className="paragraph ">
            <p>
              Simply drag and drop photos and videos into your workspace to
              automatically 
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
