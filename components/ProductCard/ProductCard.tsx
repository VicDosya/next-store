import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ProductCard({ item }: any) {
  const product = item.node;
  return (
    <div className='cursor-pointer flex justify-center shadow py-5 my-5 mx-5 bg-slate-100 hover:shadow-md'>
      <Link href={`products/${product.handle}`}>
        <div className="">
          <Image
            src={product.images.edges[0].node.transformedSrc}
            alt="Product Image"
            width={150}
            height={150}
          />
        </div>
        <div className='flex items-center flex-col'>
          <h3 className="">{product.handle}</h3>
          <p className="">{product.priceRange.minVariantPrice.amount}$</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard