export const getStoryblokContentVersion = () => {
  if (process.env.NODE_ENV === "development") {
    return "draft";
  }
  return "published";
};
