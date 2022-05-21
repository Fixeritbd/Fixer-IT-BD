import React from 'react'
import { Container,Row,Col,Accordion } from 'react-bootstrap'
import './FAQStyle.css'

const FAQ = () => {
  return (
    <div className='faq-part'>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="faq-img">
                    <img src="./assets/images/faq/faqimg.png" alt="" />
                    </div>
                </Col>
                <Col lg={6}>
                  <div className="text">
                    <div className="shape">
                      <img src="./assets/images/faq/shape.png" alt="" />
                    </div>
                  <div className="faq-heading">
                      <h3>FAQ</h3>
                      <h2>Freequently asked <span className='d-block'>questions</span></h2>
                  </div>
                  <div className="faq-accordion">
                  <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>How to gain knowledge about SEO?</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>How to gain knowledge about SEO?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>How to gain knowledge about SEO?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>How to gain knowledge about SEO?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>How to gain knowledge about SEO?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default FAQ