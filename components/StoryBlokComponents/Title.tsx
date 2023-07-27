import { storyblokEditable } from "@storyblok/react";

const Title = ({ blok }: any) => {
  return <h2 className="font-bold text-2xl my-2" {...storyblokEditable(blok)} key={blok.uid}>{blok.headline}</h2>;
};

export default Title;