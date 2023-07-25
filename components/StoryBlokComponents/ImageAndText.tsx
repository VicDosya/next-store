import { storyblokEditable } from "@storyblok/react";

const ImageAndText = ({ blok }: any) => {
  return (
    <div className="column feature" {...storyblokEditable(blok)}>
      <div className="relative flex justify-center">
        <img className="object-none w-full h-60" src={blok.image.filename} />
        <div className="absolute top-5">
          <p className="font-bold text-white text-4xl">{blok.title}</p>
          <p className="text-white text-xl mt-2">{blok.description}</p>
        </div>
      </div>
    </div>
  )
};

export default ImageAndText;
