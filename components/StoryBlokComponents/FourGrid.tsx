import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const FourGrid = ({ blok }: any) => {
  return (
    <div className="grid grid-cols-4" {...storyblokEditable(blok)} key={blok.uid}>
      {blok.columns.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default FourGrid;