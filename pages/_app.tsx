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
import ProductsGrid from "../components/StoryBlokComponents/ProductsGrid";
import CartProvider from "../components/Cart/CartContext";
import Navigation from "../components/Navigation/Navigation";
import TopMessageBar from "../components/StoryBlokComponents/TopMessageBar";
import LovedBy from "../components/StoryBlokComponents/LovedBy";


//Initialize connection with Storyblok(Visual Editor) and provide API client.
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  apiOptions: {
    cache: {
      type: "memory",
      clear: "auto"
    }
  },
  use: [apiPlugin],
  components: {
    topMessageBar: TopMessageBar,
    navigation: Navigation,
    lovedBy: LovedBy,
    productsGrid: ProductsGrid,
    imageAndText: ImageAndText,
    productItemGrid: ProductItemGrid,
    fourGrid: FourGrid,
    twoGrid: TwoGrid,
    title: Title,
    description: Description,
    page: Page,
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

export default MyApp