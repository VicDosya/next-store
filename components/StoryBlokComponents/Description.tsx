import { storyblokEditable } from "@storyblok/react";

const Description = ({ blok }: any) => {
  return <p className="text-xl mb-5" {...storyblokEditable(blok)}>{blok.description}</p>;
};

export default Description;