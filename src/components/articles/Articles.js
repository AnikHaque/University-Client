import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Articles.css';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Articles = () => {
    
    return (
      <div>
          <h1 className='fw-bold text-center mb-3'>Articles & Tips</h1>
          <p className='text-center text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor<br></br> incididunt labore dolore magna aliqua minim veniam</p>
<Container>
  <Row>
    <Col sm={12} md={6} lg={4}>
    <Card className='me-2 card-article mb-2'>
    <Card.Img variant="top" src="https://university.cactusthemes.com/wp-content/uploads/2015/08/iStock_000027500935_Large-526x526.jpg" className='img-fluid w-75 article-img d-flex mx-auto' />
    <Card.Body>
      <Card.Title className='text-center'> Your Career Starts Here</Card.Title>
      <Card.Text className='text-center'>
      On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized.
      </Card.Text>
      
      <Link ><button className='btn-service d-flex mx-auto'>Read</button></Link>
    </Card.Body>
    
  </Card>
    </Col>
    <Col sm={12} md={6} lg={4}>
    <Card className='me-2 card-article mb-2'>
    <Card.Img variant="top" src="https://university.cactusthemes.com/wp-content/uploads/2014/06/University-blog-001-526x526.jpg" className='img-fluid w-75 article-img d-flex mx-auto' />
    <Card.Body>
      <Card.Title className='text-center'> Spark Of Genius</Card.Title>
      <Card.Text className='text-center'>
      To take a trivial example which of us ever undertakes laborious physical exercise except.
      </Card.Text>
      
      <Link ><button className='btn-service d-flex mx-auto'>Read</button></Link>
    </Card.Body>
    
  </Card>
    </Col>
    <Col sm={12} md={6} lg={4}>
    <Card className='me-2 card-article'>
    <Card.Img variant="top" src="https://shtheme.info/demosd/orgafe/wp-content/uploads/2019/04/blog1.jpg" className='img-fluid w-75 d-flex mx-auto' />
    <Card.Body>
      <Card.Title className='text-center'> EXCEPTEUR SINT OCCAECAT CUPIDATAT</Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text> 
      <Link ><button className=' btn-service d-flex mx-auto'>Read</button></Link>
    </Card.Body> 
  </Card>
    </Col> 
  </Row>
</Container>
        </div>
    );
};

export default Articles;