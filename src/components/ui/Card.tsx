import React from 'react'
import Image from 'next/image'

import Rating from './Rating'

import {Product} from "@/utils/type"

const Card = ({category, name, price, rating, discount, availability} : Product) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><Image src={`/${category}`} alt={category} width={200} height={150}/></figure>
    <div className="indicator">
      <span className="indicator-item badge badge-secondary"></span> 
      <div className="grid w-32 h-32 bg-base-300 place-items-center">{discount}% off</div>
    </div>
    <div className="card-body">
        <h2 className="card-title">{name} <div className="badge badge-secondary">{availability}</div></h2>
        <Rating rating={rating}/>
        <p className=''>price: {price}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div> 
        </div>
    </div>
    </div>
  )
}

export default Card
