import React from "react";
import blogcard from "./blogcard.png";
import "./Blog.css";
import { Button, Card, Col, Nav, Row } from "react-bootstrap";
import { BiTime } from "react-icons/bi";
import { IoMdArrowRoundForward } from "react-icons/io";

const BlogCart = () => {
  return (
    <div>
      <div >
        <Card className="cards">
          <Card.Img variant="top" src={blogcard} className="card_img"/>
          <Card.Body>
            <div className="time">
              <span>
                <BiTime />
              <span className="px-2">22 March, 2022</span>  
              </span>{" "}
              
              <Button className="btn_marketing">Marketing</Button>
            </div>
            <Card.Title>
              <h4 className="py-3">Post launch shower initiative forward</h4>
            </Card.Title>
            <a href="#">Continue Reading <IoMdArrowRoundForward/></a> 
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default BlogCart;
