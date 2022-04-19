import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddReviews.css';
import useAuth from '../../hooks/useAuth';

const AddReviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/reviews',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='add-course container'>
            <h1 className='text-center fw-bold  mt-5 text-dark'>Please Add a Review !!!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name",)} placeholder=" Name" defaultValue={user.displayName} />
      <input {...register("description",)} placeholder="Review"/>
      <input type="number" {...register("rating", )} placeholder="Rating"/>
      <input {...register("img",)} placeholder=" Image"/>
      <input type="submit" />
    </form> 
        </div>
    );
};

export default AddReviews;