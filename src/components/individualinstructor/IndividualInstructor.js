import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import './IndividualInstructor.css';
const IndividualInstructor = (props) => {
    const {_id,name,description,designation,img,rating} = props.instructors;
    const firstExample = {
      size: 35,
      value:rating,
      edit: false,
    
      
    };
    return (
        <div>
           <div class="col hhh">
  <div className='individual-instructor'>
  <img src={img} class="card-img-top img-fluid  image-instructor mb-2" alt="..."></img>
  <h4 class="card-title text-center">{name}</h4>
  <h6 class="card-title text-center">{designation}</h6>
  <p class="card-text  text-center">{description}</p>
  <Link to={`/products/${_id}`}>
        <button className="btn btn-details text-white px-4 mb-3"> Details <i class="fa-solid fa-arrow-right px-2"></i></button>
        </Link> 
  </div>

</div>

        </div>
    );
};

export default IndividualInstructor;