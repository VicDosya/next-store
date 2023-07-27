import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ProductCard({ item }: any) {
  const product = item.node;
  return (
    <div className='cursor-pointer flex justify-center shadow py-5 my-5 mx-24 h-72 w-72 border-2 rounded-t-2xl hover:shadow-lg'>
      <Link href={`/products/${product.handle}`}>
        <div className="flex justify-center w-full">
          <Image
            src={product.images.edges[0].node.transformedSrc}
            alt="Product Image"
            width={150}
            height={150}
          />
        </div>
        <div className='flex justify-center w-64 h-12 mt-16'>
          <h3 className="font-extrabold text-fuchsia-900 text-lg">{product.title}</h3>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard