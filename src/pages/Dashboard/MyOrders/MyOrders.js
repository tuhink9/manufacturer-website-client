import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyOrders = id => {
    const [myOrders, setMyOrders] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/orderedParts`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[])
    const handleDelete = () => {
        const proceed = window.confirm('Are you sure?')
        if(proceed){
            const url = `http://localhost:5000/orderedParts/${id}`
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = myOrders.filter(product => product._id !== id)
                setMyOrders(remaining)
            })
        }
    }
    return (
        <div>
            {
                myOrders.map(product => <div key={product._id}>
                    <h1>My Orders</h1>
            <img src={product.img} alt="" />
            <h2>{product.name}</h2>
            <h3>{product.email}</h3>
            <h5>{product.price}</h5>
            <h6>{product.description}</h6>
            <h5>{product.quantity}</h5>
            <h5>{product.supplier}</h5>
                </div>)
            }
            {
                myOrders.map(product => <div key={product._id}>
                    <h3>{product.name}<button onClick={()=>handleDelete(product._id)}>Remove</button></h3>
                </div>)
            }
            <Link to='/addproduct'><button>Add Product</button></Link>
        </div>
    );
};

export default MyOrders;