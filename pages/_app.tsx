import { storyblokInit, apiPlugin } from "@storyblok/react";
import "../app/globals.css";
import { AppProps } from "next/app";
import Page from "../components/StoryBlokComponents/Page";
import ImageAndText from "../components/StoryBlokComponents/ImageAndText";
import FourGrid from "../components/StoryBlokComponents/FourGrid";
import Title from "../components/StoryBlokComponents/Title";
import Description from "../components/StoryBlokComponents/Description";
import ProductItemGrid from "../components/StoryBlokComponents/ProductItemGrid";
import TwoGrid from "../components/StoryBlokComponents/TwoGrid";
import Layout from "../components/Layout/Layout";
import FourGridProducts from "../components/StoryBlokComponents/FourGridProducts";

const components = {
  imageAndText: ImageAndText,
  productItemGrid: ProductItemGrid,
  fourGridProducts: FourGridProducts,
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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp