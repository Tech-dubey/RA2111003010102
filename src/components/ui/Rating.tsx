import React, { useEffect } from 'react'

const Rating = ({rating}) => {

    useEffect(()=>{
        document.getElementsByClassName('mask')[Math.round(rating) * 2].checked = true;
    }, []);

  return (
    <div className="rating rating-lg rating-half">
        <input type="radio" name="rating-10" className="rating-hidden" disabled/>
        <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" disabled/>
        <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" disabled/>
        <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" disabled/>
        <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" disabled/>
        <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" disabled/>
        <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" disabled/>
        <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" disabled/>
        <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" disabled/>
        <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" disabled/>
        <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" disabled/>
    </div>
  )
}

export default Rating
