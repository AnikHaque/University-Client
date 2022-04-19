import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Services.css';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
    
    return (
      <div className='services'>
        <div className='container'>
          <h1 className='fw-bold text-center mb-3'>Our Services</h1>
          <p className='text-center text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor<br></br> incididunt labore dolore magna aliqua minim veniam</p>
        <CardGroup className='mb-3'>
  <Card className='me-2 card'>
    <Card.Img variant="top" src="https://www.aktivmind.com/blog/wp-content/uploads/2017/10/elearning-624x416.png" className='img-fluid w-50 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Online Courses</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <br></br>
      <Link className='text-white'><button className='btn btn-banner text-white d-flex mx-auto px-5 pe-5'>Read</button></Link>
    </Card.Body>
    
  </Card>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://mauvelli.com/wp-content/uploads/2021/02/Events-1_6srS50V.jpg" className='img-fluid w-50 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Our Events</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      Contrary to popular belief, Lorem Ipsum is not simply 
      </Card.Text>
      <Link className='text-dark'><button className='btn btn-banner text-white d-flex mx-auto px-5 pe-5'>Read</button></Link>
    </Card.Body>
    
  </Card>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://preply.com/wp-content/uploads/2018/04/shopping_bags.jpg" className='img-fluid w-50 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Online Shop</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <Link className='text-dark'><button className='btn btn-banner text-white d-flex mx-auto px-5 pe-5'>Read</button></Link>
    </Card.Body>
    
  </Card>
  
</CardGroup>
        
        </div>
        </div>
    );
};

export default Services;