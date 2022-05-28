import React from 'react';
import { useNavigate } from 'react-router-dom';
const CarPart = ({parts}) => {
    const {_id, name, img, description, price, availableQuantity, minimumOrderQuantity } = parts;
    const navigate =useNavigate();
    const toOrderDetail = id => {
        console.log(id)
        navigate(`/parts/${id}`)
    }
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <h4>{price}</h4>
            <h6>{availableQuantity}</h6>
            <h6>{minimumOrderQuantity}</h6>
            <button className='btn btn-info' onClick={()=>toOrderDetail(_id)}>Order Now</button>
        </div>
    );
};

export default CarPart;