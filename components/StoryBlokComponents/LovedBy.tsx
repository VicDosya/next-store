import { storyblokEditable } from "@storyblok/react";
import telegraph from '../../public/telegraph.png';
import Image from "next/image";

const LovedBy = ({ blok }: any) => {
  return (
    <div className="w-full mt-5 mb-5 text-center lg:mb-10" {...storyblokEditable(blok)} key={blok.uid}>
      <p className="text-2xl font-extrabold text-fuchsia-900 mb-3 md:text-xl">Loved by:</p>
      <div className="grid grid-cols-5 mx-4 items-center h-16 bg-white border-b-2 border-gray-100 gap-3 lg:gap-0 mx-16 ">
        <div className="flex justify-center opacity-60">
          <Image src={telegraph} alt="icon" width={150} />
        </div>
        <div className="flex justify-center opacity-60">
          <Image src={telegraph} alt="icon" width={150} />
        </div>
        <div className="flex justify-center opacity-60">
          <Image src={telegraph} alt="icon" width={150} />
        </div>
        <div className="flex justify-center opacity-60">
          <Image src={telegraph} alt="icon" width={150} />
        </div>
        <div className="flex justify-center opacity-60">
          <Image src={telegraph} alt="icon" width={150} />
        </div>
      </div>
      <div className="border"></div>
    </div>

  );
};

export default LovedBy;