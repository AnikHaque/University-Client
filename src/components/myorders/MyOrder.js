import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrder.css';
const MyOrder = () => {
    const [foods, setFoods] = useState([])
    const {user} = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user.email}`)
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])
    return (
        <div className='bg-order text-dark pt-5 pb-5'>
            <h1 className="fw-bold mt-2 text-center mb-5">Enrolled Course : {foods.length}</h1>
        <div className="service-container  pt-4 pb-4">
          <div className="container">
         
      {foods.map((pd, index) => (
        <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4 col-lg-4">
           
         <table>
           <tr>
           <th className='pb-2 order-heading'>Enrolled By:</th>
           </tr>
           <tr>
          <td className='pb-4'>{pd.name}</td>
           </tr>
         </table>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4">
          <table>
           <tr>
           <th className='pb-2 order-heading'>Course Name:</th>
           </tr>
           <tr>
          <td className='pb-4'>{pd.foodname}</td>
           </tr>
         </table>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4">
          <table>
           <tr>
           <th className='pb-2 order-heading'>Course Price:</th>
           </tr>
           <tr>
          <td className='pb-4'>{pd.price}</td>
           </tr>
         </table>
          </div>
          
          
        </div>
      </div>


))}

</div>
</div>
</div>
    );
};

export default MyOrder;