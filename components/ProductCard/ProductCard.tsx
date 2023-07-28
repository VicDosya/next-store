import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ProductCard({ item }: any) {
  const product = item.node;
  return (
    <>
      <div className='cursor-pointer flex flex-col justify-center my-5 mx-24'>
        <Link href={`/products/${product.handle}`}>
          <div className="flex justify-center w-full">
            <Image
              src={product.images.edges[0].node.transformedSrc}
              alt="Product Image"
              width={250}
              height={250}
              className='rounded-xl'
            />
          </div>
        </Link>
        <div className='mt-2'>
          <p className='font-bold text-xl text-fuchsia-900'>{product.title}</p>
          <p className='text-lg text-fuchsia-900 mt-2'>{product.description}</p>
          <button className='mt-3 tracking-wide bg-fuchsia-900 hover:bg-fuchsia-950 text-white font-bold py-2 px-4 rounded-full'>Get started</button>
        </div>
      </div>
    </>
  )
}

export default ProductCard