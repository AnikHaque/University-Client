import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddCourse.css';

const AddCourse = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/courses',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='add-course container'>
            <h1 className='text-center fw-bold  mt-5 text-dark'>Please Add a Course !!!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name",)} placeholder="Course Name" />
      <input {...register("description",)} placeholder="Course Description"/>
      <input type="number" {...register("price", )} placeholder="Course Price"/>
      <input type="number" {...register("rating", )} placeholder="Course Rating"/>
      <input {...register("img",)} placeholder="Course Image"/>
      <input type="submit" />
    </form> 
        </div>
    );
};

export default AddCourse;