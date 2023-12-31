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
  const [cartLength, setCartLength] = useState(0);

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

  const { data: cartDetails }: any = useSWR(
    cartId ? ['getCartDetails', cartId] : null,
    () => fetchCartDetails(cartId),
    {
      refreshInterval: 1000,
    }
  );

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
    setCartLength(cartDetails?.totalQuantity);
  }, [cartDetails]);

  return <CartContext.Provider value={{
    cartId,
    setCartId,
    cartItems,
    setCartItems,
    isOpen,
    setIsOpen,
    cartLength,
  }}>{children}</CartContext.Provider>;
}

export default CartProvider