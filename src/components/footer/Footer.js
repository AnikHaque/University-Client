import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
           <Container>
  <Row>
    <Col sm={12} md={12} lg={4}>
<h2>University</h2>
    </Col>
    <Col sm={12} md={12} lg={4}>
        <div className='mx-5'>
       
        </div>
      
     

    </Col>
    <Col sm={12} md={12} lg={4}>
    <div className='text-center'>
            <i class="fa-brands fa-facebook fs-2 me-3"></i>
            <i class="fa-brands fa-instagram-square fs-2 me-3"></i>
            <i class="fa-brands fa-youtube fs-2 me-3"></i>
            <i class="fa-brands fa-twitter-square fs-2"></i>
            </div>
    </Col>
    </Row>
 
</Container>
<div className='footer-2nd'>
<Container>
  <Row>
    <Col sm={12} md={12} lg={3}>
        <h5 className='text-center mb-3'>About Us</h5>
        <p className='text-center'>Lorem ipsum dolor amet coadipisicing elit sed do eiusmod tempor.</p>
    </Col>
    <Col sm={12} md={12} lg={3}>
        <h5 className='mb-3'>Students Support</h5>
        <a href=''>Help & Counsiling</a>
        <br></br>
        <a href=''>Privacy Policy</a>
        <br></br>
        <a href=''>Fees and Enrollment</a>
        <br></br>
        <a href=''>Routine Schedule</a>
        <br></br>
        <a href=''>Get a Call</a>
        <br></br>
        <a href=''>Online Enquiry</a>
        <br></br>
        <a href=''>My Account</a>
    </Col>
    <Col sm={12} md={12} lg={3}>
<h5 className='mb-3'>Recent News</h5>
<b>Using Visual Composer Webs Builder Create WordPress Websites.</b>
<p>By Zamilsh</p>
    </Col>
    <Col sm={12} md={12} lg={3}>
        <p>Enter your email and we’ll send you latest information plans.</p>
        <input type='text'></input>
        <button className='btn btn-light btn-footer'>Subscribe</button>
    </Col>
  </Row>
 
</Container>
</div>

        </div>
    );
};

export default Footer;