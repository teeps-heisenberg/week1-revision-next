import React from 'react'
import { useRouter } from 'next/router'

const Review = () => {
    const router = useRouter();
    const  reviewId = router.query.reviewId;
  return (
    <div>
        <h1>Showing Review {reviewId} for product. </h1>
    </div>
  )
}

export default Review