import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const PartsDetail = () => {
    const {partsId} = useParams();
    const [parts, setParts] = useState([]);
    const [user] = useAuthState(auth);
    const [partsQuantity, setPartsQuantity] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/parts/${partsId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setParts(data))
    })
    return (
        <div>
            <div class="card card-side bg-base-100 shadow-xl">
  <figure><img src={parts.img} alt="Album"/></figure>
  <div class="card-body">
  <h2>{parts.name}</h2>
            <p>{parts.description}</p>
            <h4>Price Per Unit: {parts.price}</h4>
            <h6>Available Quantity: {parts.availableQuantity}</h6>
            <h6>Minimum Order Quantity: {parts.minimumOrderQuantity}</h6>
            <Link to='/myorders'><button>Purchase</button></Link>
  </div>
</div>
        </div>
    );
};

export default PartsDetail;