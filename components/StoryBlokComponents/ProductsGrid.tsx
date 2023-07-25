import { useStoryblokState, storyblokEditable, StoryblokComponent } from "@storyblok/react";
import ProductList from "../ProductList/ProductList";

const ProductsGrid = ({ blok }: any) => {
  console.log('PRODUCTS LIST:', blok);
  return (
    <div className="" {...storyblokEditable(blok)}>
      <ProductList />
    </div>
  );
};

export default ProductsGrid;