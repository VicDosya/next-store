export const getStoryblokContentVersion = () => {
  if (process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_MODE === "true") {
    return "draft";
  }
  return "published";
};
