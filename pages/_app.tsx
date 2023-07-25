import { storyblokInit, apiPlugin } from "@storyblok/react";
import "../app/globals.css";
import { AppProps } from "next/app";
import Page from '../components/Page';
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Teaser from "../components/Teaser";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
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