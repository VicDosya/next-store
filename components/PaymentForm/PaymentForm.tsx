"use client";
import React, { useContext, useEffect, useState } from 'react'
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { CartContext } from '../Cart/CartContext';

function PaymentForm() {
  const { cartItems }: any = useContext(CartContext);
  const stripe = useStripe();
  const elements: any = useElements();

  const [message, setMessage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret",
    );
    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });

  }, [stripe])

  const paymentElementOptions: any = {
    layout: "tabs",
  };

  const handleSubmit = async (e: any) => {
    setMessage(null);
    e.preventDefault();

    if (!stripe || !elements) {
      //TODO: Make button submission disabled
      return;
    }
    setIsLoading(true);

    const { error } = await stripe?.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/success",
      }
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured");
    }

    setIsLoading(false);
  }

  return (
    <>
      <div className=' bg-slate-200'>
        {message && (
          <div className='flex justify-center my-5'>{message}</div>
        )}
        <PaymentElement options={paymentElementOptions} className=' m-auto w-96' />
        <div className='flex justify-center'>
          <button onClick={handleSubmit} className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Submit</button>
        </div>
      </div>
    </>
  )
}

export default PaymentForm