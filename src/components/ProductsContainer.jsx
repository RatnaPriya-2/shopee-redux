import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";



const ProductsContainer = () => {
  const products = useSelector((state) => state.products);
  return (
    <div>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
