import { storyblokEditable } from "@storyblok/react";
import ProductList from "../ProductList/ProductList";

const ProductsGrid = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)} key={blok.uid}>
      <ProductList />
    </div>
  );
};

export default ProductsGrid;