import React, { useContext, useState, useEffect } from 'react'
import Image from 'next/image';
import PaymentForm from '../components/PaymentForm/PaymentForm'
import { CartContext } from '../components/Cart/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

function Checkout() {
  const { cartItems }: any = useContext(CartContext);
  const [clientSecret, setClientSecret] = useState("");

  const appearance = {
    theme: 'stripe',
  };
  const options: any = {
    clientSecret,
    appearance,
  };

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: cartItems.cost.totalAmount.amount,
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, []);
  return (
    <>
      <div>
        <div className='flex justify-center'>Checkout</div>
        {cartItems ? cartItems?.lines?.edges?.map((item: any) => {
          return (
            <div key={item.node.merchandise.id} className='flex justify-center items-center my-5'>
              <div>
                <Image src={item.node.merchandise.image.transformedSrc} alt="alt text" width={125} height={20}></Image>
              </div>
              <div className='mx-5'>
                <h1>{item.node.merchandise.product.title}</h1>
                <p>{item.node.merchandise.title}</p>
              </div>
            </div>
          )
        }) : ""}
        <div className='flex flex-col items-center'>
          <h1>Total amount:</h1>
          <h2>{cartItems?.cost?.totalAmount?.amount}</h2>
        </div>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        )}
      </div>
    </>
  )
}

export default Checkout