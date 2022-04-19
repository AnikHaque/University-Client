import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './OverAll.css';
const OverAll = () => {
    return (
        <div>
           <Container>
  <Row className='mb-4'>
    <Col sm={12} md={6} lg={6}>
   <h3>Create. Manage. Sell Events & Courses
</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<button className='btn btn-banner text-white px-5 pe-5 pt-3 pb-3'>Details</button>
    </Col>
    <Col sm={12} md={6} lg={6}>
<img src='https://university.cactusthemes.com/wp-content/uploads/2014/07/001-macbook-air.png' className='img-fluid'></img>
    </Col>
  </Row>
  <hr></hr>
  <Row className='mb-4'>
    <Col sm={12} md={6} lg={6}>
    <img src='https://university.cactusthemes.com/wp-content/uploads/2014/07/002-features.png' className='img-fluid'></img>
    </Col>
    <Col sm={12} md={6} lg={6}>
    <h3>Learn From The Best Lecturers
</h3>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
<button className='btn btn-banner text-white px-5 pe-5 pt-3 pb-3'>Details</button>
    </Col>
  </Row>
</Container>

        </div>
    );
};

export default OverAll;