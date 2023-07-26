import React, { createContext, useState, useEffect } from 'react'
import { storefront } from '../../utils/shopify';
import useSWR from 'swr';
import { getCartDetailsQuery } from './queries';

export const CartContext = createContext({}) as any;

function CartProvider({ children }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartId, setCartId] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cardId') || null;
    }
    return null;
  });
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cartId) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('cardId', cartId);
      }
    } else {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('cardId');
      }
    }
  }, [cartId]);

  const { data: cartDetails, isLoading, error: cartError }: any = useSWR(
    cartId ? ['getCartDetails', cartId] : null,
    () => fetchCartDetails(cartId),
    {
      refreshInterval: 1000,
    }
  );

  if (cartError) {
    <div>Something went wrong with the cart..</div>
  }
  if (isLoading) {
    <div>Loading ...</div>
  }

  const fetchCartDetails = async (cartId: any) => {
    try {
      if (cartId) {
        const variables = {
          cartId: cartId,
        };
        const cartDetails = await storefront(getCartDetailsQuery, variables);
        return cartDetails.data.cart;
      }
      return null;
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    setCartItems(cartDetails);
  }, [cartDetails])

  return <CartContext.Provider value={{
    cartId,
    setCartId,
    cartItems,
    setCartItems,
    isOpen,
    setIsOpen
  }}>{children}</CartContext.Provider>;
}

export default CartProvider