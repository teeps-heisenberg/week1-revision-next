import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
const Reviews = () => {
  const router = useRouter();
  const productId = router.query.productId;
    return (
    <div>
        <h2>All Reviews for Product {productId}</h2>
        
    </div>
  )
}

export default Reviews