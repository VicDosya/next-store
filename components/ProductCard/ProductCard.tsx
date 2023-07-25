import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import potato from "../../public/potato.png";

function ProductCard() {
  return (
    <div className='flex justify-center'>
      <Link href={`products/INSERTHERE`}>
        <div className="">
          <Image
            src={potato}
            alt="Product Image"
            width={150}
            height={150}
          />
        </div>
        <h3 className="">A Potato</h3>
        <p className="">3.00$</p>
      </Link>
    </div>
  )
}

export default ProductCard