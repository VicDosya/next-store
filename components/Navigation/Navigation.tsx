import { useContext, useState } from "react";
import Link from "next/link";
import Cart from "../Cart/Cart";
import { CartContext } from "../Cart/CartContext";
const Navigation = () => {
  const { isOpen, setIsOpen }: any = useContext(CartContext);

  return (
    <div className="relative bg-white border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Logo</span>
              <img
                className="h-20 w-auto sm:h-16 hidden sm:block"
                src='https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png'
                alt="logo"
              />
              <img
                className="h-20 w-auto sm:h-16 sm:hidden"
                src='https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png'
                alt="logo"
              />

            </Link>
          </div>
          <div className="hidden cursor-pointer md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10">
            <p className="text-base font-medium text-gray-500 hover:text-gray-900" onClick={() => setIsOpen(!isOpen)}>
              My Cart 🛒
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;