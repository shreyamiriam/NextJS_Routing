import React from 'react'
import ProductId from '../../page'
import { Notfound } from 'next/navigation'

function ReviewId({params}:{params:{productId:string,reviewId:string}}) {
    const {productId,reviewId}=params
    if(parseInt(reviewId) >1000) Notfound()




  return (
    <div>Product Id {productId} Review Id {reviewId}</div>
  )
}

export default ReviewId