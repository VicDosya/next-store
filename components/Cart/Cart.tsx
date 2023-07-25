import React, { useContext } from 'react'
import { CartContext } from './CartContext'

function Cart() {
  const { setIsOpen, cartItems, setCartItems }: any = useContext(CartContext);
  return (
    <div className='w-72 h-fit absolute right-0 top-10 flex flex-col items-center bg-blue-400 text-white font-bold py-2 px-4 rounded-lg '>
      <div className='flex w-full'>
        <p onClick={() => setIsOpen(false)}>❌</p>
        <h2 className='font-bold flex m-auto'>Cart</h2>
      </div>
      <div className=''>
        {cartItems?.map((item: any) => (
          <div className="mt-2 bg-blue-500 w-72" key={item.node.merchandise.id}>
            <div>{item.node.merchandise.product.title}</div>
            <div>{item.node.merchandise.title}</div>
            <div>x{item.node.quantity}</div>
          </div>
        ))}
      </div>
      <div className='h-full flex items-end'>
        <button className='font-bold'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart