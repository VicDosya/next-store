import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const TopMessageBar = ({ blok }: any) => {
  return (
    <Link href="#">
      <div className="w-full h-10 bg-fuchsia-300 flex items-center justify-center">
        <p className="font-bold tracking-tight text-fuchsia-900" {...storyblokEditable(blok)} key={blok.uid}>{blok.title}</p>
      </div>
    </Link>
  );
};

export default TopMessageBar;