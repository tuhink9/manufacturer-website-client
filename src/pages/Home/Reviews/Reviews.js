import React, { useEffect, useState } from 'react';
import Review from '../../Home/Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/review`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-12 mb-12'>
            <div>
                <div>
                    <h2 className='text-3xl text-center my-5'>What Our Client Says</h2>
                </div>
                <div>

                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;