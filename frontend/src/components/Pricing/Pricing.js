import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa';
import './Pricing.css'

export default function Pricing() {
    return (
        <div className="pricing-part">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="pricingMain text-center">
                            <h3 className="heading">Select Your Plan</h3>
                            <p>Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</p>
                        </div>
                        <div className="pricingBtnMain text-center">
                            <Button className="PackageButton pricingBtn active">Monthly</Button>
                            <Button className="yearlyButton pricingBtn">Yearly</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <div className="pricing-main">
                            <Card style={{ width: '25rem' }}>
                                <div class="pricing-plan">
                                    <h4>Professional</h4>
                                    <h6 className='pricingSubheading'>A beautiful, simple website</h6>
                                    <p>$799.00<span>Pack</span>
                                    </p>

                                    <ul>
                                        <li><FaCheck className='checkMark' />10 Pages Responsive Website</li>
                                        <li><FaCheck className='checkMark' /> 5 PPC Campaigns</li>
                                        <li><FaCheck className='checkMark' /> 10 SEO Keywords</li>
                                        <li><FaCheck className='checkMark' /> 5 Facebook Campaigns</li>
                                        <li><FaCheck className='checkMark' /> 2 Video Campaigns</li>
                                    </ul>
                                    <div className="btnMain text-left mt-4">
                                        <Button className='pricingBtn'>Purchase Now</Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="pricing-main">
                            <Card style={{ width: '25rem' }}>
                                <div class="pricing-plan active">
                                    <h4>Standard</h4>
                                    <h6 className='pricingSubheading'>Creative design, premium website</h6>
                                    <p>$2k.00<span>Pack</span>
                                    </p>

                                    <ul>
                                        <li><FaCheck className='checkMark' />10 Pages Responsive Website</li>
                                        <li><FaCheck className='checkMark' /> 5 PPC Campaigns</li>
                                        <li><FaCheck className='checkMark' /> 10 SEO Keywords</li>
                                        <li><FaCheck className='checkMark' /> 5 Facebook Campaigns</li>
                                        <li><FaCheck className='checkMark' /> 2 Video Campaigns</li>
                                    </ul>
                                    <div className="btnMain text-left mt-4">
                                        <Button className='pricingBtn'>Purchase Now</Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="pricing-main">
                            <Card style={{ width: '25rem' }}>
                                <div class="pricing-plan">
                                    <h4>Professional</h4>
                                    <h6 className='pricingSubheading'>exclusive Dynamic website</h6>
                                    <p>$3k.00<span>Pack</span>
                                    </p>

                                    <ul>
                                        <li><FaCheck className='checkMark' />10 Pages Responsive Website</li>
                                        <li><FaCheck className='checkMark' /> 5 PPC Campaigns</li>
                                        <li><FaCheck className='checkMark' /> 10 SEO Keywords</li>
                                        <li><FaCheck className='checkMark' /> 5 Facebook Campaigns</li>
                                        <li><FaCheck className='checkMark' /> 2 Video Campaigns</li>
                                    </ul>
                                    <div className="btnMain text-left mt-4">
                                        <Button className='pricingBtn'>Purchase Now</Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
