import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import React from 'react'

const TwoGrid = ({ blok }: any) => {
  return (
    <div className="grid grid-cols-2 mt-5" {...storyblokEditable(blok)} key={blok.uid}>
      {blok.columns.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default TwoGrid;