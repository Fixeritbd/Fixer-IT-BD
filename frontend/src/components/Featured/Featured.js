import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap'
import axios from 'axios'
import './Featured.css'

export default function Featured() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    let [featured, serFeeatured] = useState([]);
    useEffect(() => {
        let featuredDetails = async () => {
            let { data } = await axios.get("http://localhost:8000/featured");
            serFeeatured(data);
        };
        featuredDetails();
    }, []);


    return (
        <Container>
            <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>

                {featured.map(item => (
                    <Carousel.Item>
                        <Row>
                            <Col lg={6}>
                                <div className="featured_text text-left">
                                    <h3 className="subHeading">{item.subHeading}</h3>
                                    <h1 className="heading">{item.heading}</h1>
                                    <p>{item.para1}</p>
                                    <p className='mt-5'>{item.para2}</p>

                                    <Button className="button readMoreBtn">{item.button}</Button>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="featured_img">
                                    <img src={item.img} alt="featuredImg" />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))}

            </Carousel>
        </Container>
    )
}
