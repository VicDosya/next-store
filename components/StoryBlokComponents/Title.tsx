import { storyblokEditable } from "@storyblok/react";

const Title = ({ blok }: any) => {
  return <h2 className="mx-3 text-2xl text-center font-serif text-fuchsia-900 lg:text-4xl lg:text-left lg:mx-40" {...storyblokEditable(blok)} key={blok.uid}>{blok.headline}</h2>;
};

export default Title;