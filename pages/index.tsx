import React from 'react'
import Head from "next/head";
import { useStoryblokState, StoryblokComponent, getStoryblokApi } from "@storyblok/react";

export default function Home({ story }: any) {

  //Enable the Visual Editor
  story = useStoryblokState(story);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>
          {story ? story.name : "My Site"}
        </h1>
      </header>
      <StoryblokComponent blok={story.content} />

    </div>
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
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  }
}
