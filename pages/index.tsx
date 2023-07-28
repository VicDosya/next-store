import React, { useState, useEffect } from 'react'
import { StoryblokComponent, getStoryblokApi, useStoryblokState } from "@storyblok/react";
import { storefront } from '../utils/shopify';
import { productsQuery } from '../queries/productsQueries';
import ProductsProvider from '../components/ProductsContext';
import { getStoryblokContentVersion } from '../utils/helpers';

export default function Home({ story, products, preview }: any) {
  //Enable the Visual Editor
  story = useStoryblokState(story, preview);

  return (
    <>
      <ProductsProvider value={products}>
        <StoryblokComponent blok={story.content} />
      </ProductsProvider>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  try {
    const storyblokApi = getStoryblokApi();

    // Recieve storyblok data
    let { data }: any = await storyblokApi.get("cdn/stories/home", {
      version: getStoryblokContentVersion(),
      cv: +new Date(),
      ...(preview ? { version: "draft" } : {}),
    });
    // Recieve shopify data.
    const shopifyData: any = await storefront(productsQuery);

    return {
      props: {
        //Storyblok
        story: data ? data.story : false,
        key: data ? data.story.id : false,
        //Shopify
        products: shopifyData.data,
        preview,
      },
      revalidate: 3600,
    }
  } catch (error: any) {
    console.log("index.tsx getStaticProps Error:", error);
  }

}
