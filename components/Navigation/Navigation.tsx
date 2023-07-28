import { useContext } from "react";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";
import { IoMdCart } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri'
import { CartContext } from "../Cart/CartContext";
const Navigation = ({ blok }: any) => {
  const { isOpen, setIsOpen, cartLength }: any = useContext(CartContext);
  return (
    <div className="flex items-center justify-around h-20 bg-white border-b-2 border-gray-100" {...storyblokEditable(blok)} key={blok.uid}>
      <div className="flex w-full justify-center gap-3">
        {/* 3 left buttons */}
        <div className="hidden lg:inline">
          <button className="tracking-wide bg-fuchsia-900 hover:bg-fuchsia-950 text-white font-bold py-2 px-4 rounded-full">Get started</button>
        </div>
        <div className="hidden md:inline">
          <button className="flex items-center text-fuchsia-900 hover:bg-gray-200 border font-bold py-2 pl-4 pr-2 rounded-full">
            Shop
            <RiArrowDropDownLine size={25} />
          </button>
        </div>
        <div className="hidden lg:inline">
          <button className="flex items-center text-fuchsia-900 hover:bg-gray-200 font-bold py-2 px-4 rounded-full">
            About
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center">
        {/* Logo */}
        <Image src={blok.logoImg.filename} alt={blok.imgAltText} width={185} height={185} />
      </div>
      <div className="flex w-full justify-center gap-5">
        {/* Avatar */}
        <div className="cursor-pointer bg-fuchsia-300 w-8 h-8 rounded-full flex justify-center items-center hover:bg-fuchsia-400 hidden md:flex">
          <BsFillPersonFill className="text-fuchsia-900 hover:text-fuchsia-950" size={22} />
          <span className="sr-only">Notifications</span>
        </div>

        {/* Cart */}
        <div className="cursor-pointer relative bg-fuchsia-300 w-8 h-8 rounded-full flex justify-center items-center hover:bg-fuchsia-400" onClick={() => setIsOpen(!isOpen)}>
          <IoMdCart className="text-fuchsia-900 hover:text-fuchsia-950" size={22} />
          {cartLength !== 0 ? <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-fuchsia-900 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{cartLength ? cartLength : '0'}</div> : ''}

        </div>
      </div>
    </div>
  );
};

export default Navigation;