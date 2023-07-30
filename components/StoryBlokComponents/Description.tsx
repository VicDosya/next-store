import { storyblokEditable } from "@storyblok/react";

const Description = ({ blok }: any) => {
  return <p className=" mx-10 text-lg mt-2 mb-2 text-center text-fuchsia-900 leading-none lg:text-xl lg:text-left lg:mx-40" {...storyblokEditable(blok)} key={blok.uid}>{blok.description}</p>;
};

export default Description;