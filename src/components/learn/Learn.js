import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Learn.css';
const Learn = () => {
    return (
        <div className='education'>
           <Container>
  <Row className='mb-4'>
    <Col sm={12} md={6} lg={6}>
   <h2 className='learn-heading'>The Place To Learn And To Prepare For Your Future
</h2>
<p>Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus ut aut reiciendis voluptatibus maiores alias consequatur
</p>

<button className='btn btn-banner text-white px-5 pe-5 pt-3 pb-3'>Details</button>
    </Col>
    
    <Col sm={12} md={6} lg={6}>
<img src='https://university.cactusthemes.com/wp-content/uploads/2014/08/desk-items.png' className='img-fluid'></img>
    </Col>

  </Row>
</Container>

        </div>
    );
};

export default Learn;