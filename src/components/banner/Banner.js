import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
     <Container>
  <Row>
    <Col sm={12} md={6} lg={7}>
      <h1 className='banner-title'>Education and Training Organization</h1>
      <p className='banner-p'>universityis an advance solution for Education and Training organization, University, events and more...</p>
      <button className='btn btn-banner text-white px-5 pe-5 pt-2 pb-2'>Have A Look</button>
    </Col>
    <Col sm={12} md={6} lg={5}>
      <img src='https://university.cactusthemes.com/wp-content/uploads/2014/10/slide1-001x.png' className='img-fluid banner-image'></img>
    </Col>
  </Row>
</Container>
    </div>
  );
};

export default Banner;
