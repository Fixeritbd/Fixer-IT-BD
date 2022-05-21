import React from "react";
import blogcard from "./blogcard.png";
import "./Blog.css";
import { Button, Card, Col, Nav, Row } from "react-bootstrap";
import { BiTime } from "react-icons/bi";

const BlogCart = () => {
  return (
    <div>
      <div className="cards">
        <Card>
          <Card.Img variant="top" src={blogcard} />
          <Card.Body>
            <div className="time">
              <span>
                <BiTime />
                22 March, 2022
              </span>{" "}
              <Button className="btn_marketing">Marketing</Button>
            </div>
            <Card.Title>
              <h4>Post launch shower initiative forward</h4>
            </Card.Title>
            <a href="#">Continue Reading...</a> ...
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default BlogCart;
