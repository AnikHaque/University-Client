import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Education.css';
const Education = () => {
    return (
        <div className='education'>
           <Container>
  <Row className='mb-4'>
  <Col sm={12} md={6} lg={6}>
<img src='https://university.cactusthemes.com/wp-content/uploads/2014/07/Uni-branding-mockup.jpg' className='img-fluid'></img>
    </Col>

    <Col sm={12} md={6} lg={6}>
   <h2>Start Your Education Website With University
</h2>
<p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<button className='btn btn-banner text-white px-5 pe-5 pt-3 pb-3'>Details</button>
    </Col>
    
  </Row>
</Container>

        </div>
    );
};

export default Education;