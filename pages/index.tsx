import React from 'react'
import { StoryblokComponent, getStoryblokApi, useStoryblokState } from "@storyblok/react";
import { storefront } from '../utils/shopify';
import { productsQuery } from '../queries/productsQueries';
import ProductsProvider from '../components/ProductsContext';
import { getStoryblokContentVersion } from '../utils/helpers';

export default function Home({ story, products }: any) {

  //Enable the Visual Editor
  story = useStoryblokState(story);

  return (
    <>
      <ProductsProvider value={products}>
        <StoryblokComponent blok={story.content} />
      </ProductsProvider>
    </>
  )
}

export async function getStaticProps() {
  try {
    const storyblokApi = getStoryblokApi();

    // Recieve storyblok data
    let { data }: any = await storyblokApi.get("cdn/stories/home", {
      version: getStoryblokContentVersion(),
    });
    // Recieve shopify data
    const shopifyData: any = await storefront(productsQuery);

    return {
      props: {
        //Storyblok
        story: data ? data.story : false,
        key: data ? data.story.id : false,
        //Shopify
        products: shopifyData.data,
      },
      revalidate: 3600,
    }
  } catch (error: any) {
    console.log("index.tsx getStaticProps Error:", error);
  }

}
