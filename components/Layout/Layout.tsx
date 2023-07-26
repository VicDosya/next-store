import Cart from "../Cart/Cart";
import { CartContext } from "../Cart/CartContext";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import React, { useContext } from 'react'

function Layout({ children }: any) {
  const { isOpen }: any = useContext(CartContext);
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
      {isOpen && <Cart />}
    </div>
  )
}
export default Layout