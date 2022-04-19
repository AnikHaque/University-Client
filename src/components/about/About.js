import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './About.css';
const About = () => {
    return (
        <div className=''>
           <Container>
  <Row className='mb-4'>
    <Col sm={12} md={6} lg={4}>
      <i class="fa-solid fa-graduation-cap bg-about text-white fs-1 p-2 mb-2"></i>
      <h4>Education Organization</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt lorem ipsum</p>
    </Col>
    <Col sm={12} md={6} lg={4}>
    <i class="fa-brands fa-telegram bg-about text-white fs-1 p-2 mb-2"></i>
      <h4>Training Center</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt lorem ipsum</p>
    </Col>
    <Col sm={12} md={6} lg={4}>
    <i class="fa-solid fa-ticket bg-about text-white fs-1 p-2 mb-2"></i>
      <h4>Event Tickets</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt lorem ipsum</p>
    </Col>
  </Row>
  <Row>
    <Col sm={12} md={6} lg={4}>
    <i class="fa-solid fa-cart-arrow-down bg-about text-white fs-1 p-2 mb-2"></i>
      <h4>Online Shop</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt lorem ipsum</p>
    </Col>
    <Col sm={12} md={6} lg={4}>
    <i class="fa-solid fa-cubes bg-about text-white fs-1 p-2 mb-2"></i>
      <h4>No Limitation</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt lorem ipsum</p>
    </Col>
    <Col sm={12} md={6} lg={4}>
    <i class="fa-solid fa-star bg-about text-white fs-1 p-2 mb-2"></i>
      <h4>Great Support</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt lorem ipsum</p>
    </Col>
  </Row>
</Container>

        </div>
    );
};

export default About;