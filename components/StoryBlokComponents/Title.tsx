import { storyblokEditable } from "@storyblok/react";

const Title = ({ blok }: any) => {
  return <h2 className=" mx-40 text-4xl font-serif text-fuchsia-900" {...storyblokEditable(blok)} key={blok.uid}>{blok.headline}</h2>;
};

export default Title;