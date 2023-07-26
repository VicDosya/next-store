import React from 'react'
import { useStoryblokState, StoryblokComponent, getStoryblokApi } from "@storyblok/react";
import { storefront } from '../utils/shopify';
import { productsQuery } from './queries';
import ProductsProvider from '../components/ProductsContext';

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
  const storyblokApi = getStoryblokApi();
  //home is the default slug for the homepage in Storyblok
  let slug = 'home';

  //Load draft version
  let sbParams: any = {
    version: "draft" //Or 'published
  };
  // Recieve storyblok data
  let { data }: any = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
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
}
