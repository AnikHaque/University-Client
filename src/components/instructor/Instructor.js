import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IndividualInstructor from '../individualinstructor/IndividualInstructor';
import './Instructor.css';

const Instructor = () => {
    const [instructor, setInstructor] = useState([])
    useEffect(()=>{
fetch('http://localhost:5000/instructor')
.then(res => res.json())
.then(data => setInstructor(data))
    },[])


    return (
        <div className='mt-5 mb-5 instructor'>
             <h1 className='text-center fw-bold mb-5'>OUR Instructors</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-lg-4 g-4">
                {
                    instructor.map(instructors => <IndividualInstructor
                        key={instructors._id}
                        instructors={instructors}
                    ></IndividualInstructor>)
                }
                </div>
                </div>
            </div>
           
  </div>
    )}     


export default Instructor;