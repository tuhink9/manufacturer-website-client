import React, { useEffect, useState } from 'react';
import CarPart from '../CarPart/CarPart';
import './Parts.css'

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/parts')
        .then(res => res.json())
        .then(data => setParts(data))
    }, [])
    return (
        <div id='parts'>
            <h1 className='text-center my-5'>Car Parts We Provide</h1>
            <div className="parts-container">
            {
                parts.map(parts => <CarPart
                key={parts._id}
                parts={parts}
                ></CarPart>)
            }
            </div>
        </div>
    );
};

export default Parts;