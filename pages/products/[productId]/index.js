import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

const Product = () => {
    const router = useRouter();
    const productId = router.query.productId;
  return (
    <div>
        <h2>Showing Details for product {productId}</h2>
        <Link href={`${productId}/reviews`}>Show Reviews</Link>
    </div>
  )
}

export default Product