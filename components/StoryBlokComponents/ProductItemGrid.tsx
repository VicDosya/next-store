import React from 'react'
import Link from 'next/link';
import { storyblokEditable } from "@storyblok/react";

function ProductItemGrid({ blok }: any) {
  return (
    <div className=" shadow py-5 mx-5 bg-slate-100 hover:shadow-md" {...storyblokEditable(blok)} key={blok.uid}>
      <Link href={`products/INSERTHERE`}>
        <div className="flex items-center flex-col">
          <img className="w-32" src={blok.image.filename} />
          <div className="">
            <p className="font-bold text-xl cursor-pointer hover:underline">{blok.title}</p>
            <p className="mt-2">{blok.price}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductItemGrid