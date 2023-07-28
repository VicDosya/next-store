import Cart from "../Cart/Cart";
import { CartContext } from "../Cart/CartContext";
import Footer from "../Footer/Footer";
import React, { useContext } from 'react'

function Layout({ children }: any) {
  const { isOpen }: any = useContext(CartContext);
  return (
    <div>
      {children}
      <Footer />
      {isOpen && <Cart />}
    </div>
  )
}
export default Layout