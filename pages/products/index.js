import Link from 'next/link'
import React from 'react'

const ProductsList = () => {
  return (
    <div>
        <h1>All Products</h1>
        <Link href='products/1'>
            Products 1
        </Link>
        <Link href='products/2'>
            Products 2
        </Link>
        <Link href='products/3'>
            Products 3
        </Link>
    </div>
  )
}

export default ProductsList