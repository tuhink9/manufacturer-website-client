import React from 'react';

const Review = ({review}) => {
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"></h2>
    <div className="flex items-center">
      
    <div className="avatar">
  <div className="rounded-full ring ring-primary">
    <img src={review.image} />
  </div>
</div>
      <div className='pl-4'>
          <h4 className="text-xl">
              {review.name}
          </h4>
          <p>{review.email}</p>
          <p>{review.review}</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Review;