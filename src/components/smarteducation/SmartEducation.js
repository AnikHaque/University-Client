import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IndividualProduct from '../individualproduct/IndividualProduct';


import './SmartEducation.css';

const SmartEducation = () => {


    return (
        <div className='visit'>
            
            <Container>
  <Row>
    <Col sm={12} md={6} lg={6}>
        <img src='https://university.cactusthemes.com/wp-content/uploads/2014/07/education-phone.png' className='img-fluid'></img>
    </Col>
    <Col sm={12} md={6} lg={6}>
        <h2 className='text-white fw-bold pt-5'>For A Smarter Education Website
</h2>
<p className='text-white fs-5'>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<button className='btn btn-light px-5 pe-5 pt-3 pb-3'>Explore</button>
    </Col>
  </Row>
 
</Container>
  </div>
    )}     


export default SmartEducation;