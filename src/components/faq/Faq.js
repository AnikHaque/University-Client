import React, { useEffect, useState } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import IndividualProduct from '../individualproduct/IndividualProduct';


import './Faq.css';

const Faq = () => {


    return (
        <div className=''>
            
            <Container>    
  <Row>
 
    <Col sm={12} md={12} lg={6}>
    <h1 className='fw-bold faq-title mb-3'>Why ChooseUs</h1>   
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
        <Accordion>
  <Accordion.Item eventKey="0" className='mb-4'>
    <Accordion.Header>Build Your own homepage with visual composer</Accordion.Header>
    <Accordion.Body>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" className='mb-4'>
    <Accordion.Header>Clean, Beautiful and Responsive Design</Accordion.Header>
    <Accordion.Body>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2" className='mb-4'>
    <Accordion.Header>U-Event Plugin allow you to sell ticket</Accordion.Header>
    <Accordion.Body>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3" className='mb-4'>
    <Accordion.Header>Sell courses with U-Course Plugin</Accordion.Header>
    <Accordion.Body>
    Lorem ipsum dolor sit amet consectetur adipisicing elie sed eius then mod tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4" className='mb-4'>
    <Accordion.Header>Shop version available with Woo Commerce Integrated</Accordion.Header>
    <Accordion.Body>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>Professional Look and Feel for your business</Accordion.Header>
    <Accordion.Body>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </Col>
    <Col sm={12} md={12} lg={6}>
        <img src='https://university.cactusthemes.com/wp-content/uploads/2014/08/young-man.png' className='img-fluid'></img>
    </Col>
  </Row>
  
</Container> 
  </div>
    )}     


export default Faq;