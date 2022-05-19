import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import {BsFillPlayFill} from 'react-icons/bs'
import './VideoStyle.css'

const Video = () => {
  return (
    <div className='video-part'>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="video-text">
                        <div className="video-heading">
                            <h3>25 YEARS OF EXPERIENCE</h3>
                            <h2>Ready to get our digital services?</h2>
                        </div>
                        <div className="video-details">
                            <p>Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</p>
                        </div>
                        <div className="buttons">
                    <Button className="button">Read More</Button>
                  </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="video-img">
                        <img src="./assets/images/video/video-img.png" alt="" />
                        <div className="play-button">
                            <BsFillPlayFill className='play'/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Video