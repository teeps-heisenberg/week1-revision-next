import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
const Reviews = () => {
  const router = useRouter();
  const productId = router.query.productId;
    return (
    <div>
        <h2>All Reviews for Product {productId}</h2>
        <Link href='reviews/1'>
            Review 1
        </Link>
        <Link href='reviews/2'>
            Review 2
        </Link>
        <Link href='reviews/3'>
            Review 3
        </Link>
    </div>
  )
}

export default Reviews