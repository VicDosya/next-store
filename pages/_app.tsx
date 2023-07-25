import { storyblokInit, apiPlugin } from "@storyblok/react";
import "../app/globals.css";
import { AppProps } from "next/app";
import Page from '../components/Page';
import ImageAndText from "../components/ImageAndText";
import FourGrid from "../components/FourGrid";
import Title from "../components/Title";
import Description from "../components/Description";
import ProductItemGrid from "../components/ProductItemGrid";
import TwoGrid from "../components/TwoGrid";

const components = {
  imageAndText: ImageAndText,
  productItemGrid: ProductItemGrid,
  fourGrid: FourGrid,
  twoGrid: TwoGrid,
  title: Title,
  description: Description,
  page: Page,
};
//Initialize connection with Storyblok(Visual Editor) and provide API client.
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Component {...pageProps} />
  )
}

export default MyApp