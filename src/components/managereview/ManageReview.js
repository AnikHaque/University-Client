import React, { useEffect, useState } from 'react';
import SingleReview from '../singleReview/SingleReview';


import './ManageReview.css';
const ManageReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className='reviews'>
            <h1 className="text-center fw-bold pb-5">Client's Say</h1>
           
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-2  row-cols-lg-3  g-4">
                {
                    reviews.map(review => <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>)
                }
                </div>
                </div>
            </div>
        </div>
    );
};

export default ManageReview;