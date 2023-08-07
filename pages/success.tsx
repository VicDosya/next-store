import React from 'react'
import Link from 'next/link'

function SuccessPage() {
  return (
    <div>
      <div className='flex justify-center flex-col items-center my-5'>
        <h1>Your order has been successfully placed.</h1>
        <p>Thank you for choosing our product.</p>
        <p>Order receipt has been sent to your email.</p>
      </div>
      <div className='flex justify-center'>
        <Link href="/">
          <button className='mt-3 tracking-wide bg-fuchsia-900 hover:bg-fuchsia-950 text-white font-bold py-2 px-4 rounded-full'>OK!</button>
        </Link>
      </div>

    </div>
  )
}

export default SuccessPage