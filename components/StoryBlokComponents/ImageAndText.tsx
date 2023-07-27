import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import worthIt from '../../public/worthit.png';

const ImageAndText = ({ blok }: any) => {
  return (
    <div className="flex justify-center items-center" {...storyblokEditable(blok)} key={blok.uid}>
      <img className="w-full animate-fade animate-once animate-ease-in-out animate-duration-1000" src={blok.image.filename} />
      <div className="absolute">
        <div className="absolute top-36 right-10 animate-fade animate-once animate-ease-in-out animate-delay-[2200ms]">
          <Image src={worthIt} width={160} height={160} alt="worth it image" />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-serif text-fuchsia-900 mb-3">
            <span className="animate-fade-down animate-once animate-ease-in-out">{"It's"}&nbsp;</span>
            <span className="animate-fade-down animate-once animate-ease-in-out animate-delay-[200ms]">time&nbsp;</span>
            <span className="animate-fade-down animate-once animate-ease-in-out animate-delay-[400ms]">to&nbsp;</span>
            <span className="animate-fade-down animate-once animate-ease-in-out animate-delay-[600ms]"><strong>actually</strong>&nbsp;</span>
            <span className="animate-fade-down animate-once animate-ease-in-out animate-delay-[800ms]">enjoy&nbsp;</span>
            <span className="animate-fade-down animate-once animate-ease-in-out animate-delay-[1000ms]">your&nbsp;</span>
            <span className="animate-fade-down animate-once animate-ease-in-out animate-delay-[1200ms]">meal</span>
          </div>
          <div className="flex justify-center text-center text-xl mt-2 text-fuchsia-900 leading-none">
            <p className="font-extrabold animate-fade animate-once animate-ease-in-out animate-delay-[1500ms]">No more planning or prepping.</p>
            <span className="font-bold animate-fade animate-once animate-ease-in-out animate-delay-[1500ms]">&nbsp;Tasty food</span>
          </div>
          <p className="mb-6 font-bold flex justify-center text-center text-xl mt-2 text-fuchsia-900 animate-fade animate-once animate-ease-in-out animate-delay-[1500ms]">for you and your family, ready in minutes.</p>
          <button className="w-fit tracking-wide bg-fuchsia-900 hover:bg-fuchsia-950 text-white font-bold py-2 px-10 rounded-full animate-fade animate-once animate-ease-in-out animate-delay-[1700ms]">Get started</button>
        </div>
      </div>
    </div >
  )
};

export default ImageAndText;
