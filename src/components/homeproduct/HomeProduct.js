import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IndividualProduct from '../individualproduct/IndividualProduct';


import './HomeProduct.css';

const HomeProduct= () => {
    const [food, setFood] = useState([])
    useEffect(()=>{
fetch('http://localhost:5000/courses')
.then(res => res.json())
.then(data => setFood(data))
    },[])


    return (
        <div className='mt-5 mb-5'>
             <h1 className='text-center fw-bold mb-5'>OUR Courses</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-lg-3 g-4">
                {
                    food.slice(0,4).map(foods => <IndividualProduct
                        key={foods._id}
                        foods={foods}
                    ></IndividualProduct>)
                }
                </div>
                </div>
            </div>
           
  </div>
    )}     


export default HomeProduct;