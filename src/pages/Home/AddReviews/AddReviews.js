import React, { useState } from 'react';
import { toast } from 'react-toastify';
// import appointment from '../../assets/images/appointment.png'

const AddReviews = () => {
    const [review, setReview] = useState([])
    const handleBooking = e => {
        e.preventDefault();
        const review = {
            name: e.target.name.value,
            email: e.target.email.value,
            review: e.target.review.value,
            image: e.target.image.value
        }
        const url = `http://localhost:5000/review`;
        fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(review)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.success){
              toast(`Review Added`)
            }
            else{
              toast.error(`Already Added A Review`)
            }
            setReview(null)
          })
    }
    return (
<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-12">
  <div className="max-w-md w-full max-w-xs space-y-8">
    <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Say About Us</h2>
    </div>
    <form onSubmit={handleBooking} className="mt-8" action="#">
        <div>
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input id="name" name="name" type="name" placeholder="Your Name" className="input input-bordered input-info w-full my-4" />
        </div>
        <div>
          <label htmlFor="email-address" className="sr-only">Your Email</label>
          <input id="email-address" name="email" type="email" placeholder="Your Email" className="input input-bordered input-info w-full my-4" />
        </div>
        <div>
          <label htmlFor="image" className="sr-only">Your Picture</label>
          <input id="image" name="image" type="text" placeholder="Your Picture" className="input input-bordered input-info w-full my-4" />
        </div>
        <div>
          <label htmlFor="image" className="sr-only">Your Review</label>
          <input id="review" name="review" type="text" placeholder="Your Review" className="input input-bordered input-info w-full max-w-xs my-4 py-8" />
        </div>
      <div>
      <button className="btn btn-primary btn-wide">Submit</button>
      </div>
    </form>
  </div>
</div>

    );
};

export default AddReviews;