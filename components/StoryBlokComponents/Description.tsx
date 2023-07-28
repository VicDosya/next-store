import { storyblokEditable } from "@storyblok/react";

const Description = ({ blok }: any) => {
  return <p className="mx-40 text-xl mt-2 mb-2 text-fuchsia-900 leading-none" {...storyblokEditable(blok)} key={blok.uid}>{blok.description}</p>;
};

export default Description;