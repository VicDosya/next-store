import { storyblokEditable } from "@storyblok/react";
import telegraph from '../../public/telegraph.png';
import Image from "next/image";

const LovedBy = ({ blok }: any) => {
  return (
    <div className="w-full mt-5 mb-10 text-center" {...storyblokEditable(blok)} key={blok.uid}>
      <p className="text-xl font-extrabold text-fuchsia-900 mb-3">Loved by:</p>
      <div className="grid grid-cols-5 mx-16 items-center h-16 bg-white border-b-2 border-gray-100">
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