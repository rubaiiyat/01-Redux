import React from "react";
import { useSelector } from "react-redux";
import ProductsCard from "./ProductsCard";

const Home = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <div className="px-8 mt-10">
      <div className="grid grid-col-1 md:grid-cols-3">
        <div className="col-span-2">
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 justify-center ">
            {products.map((product, index) => (
              <ProductsCard product={product} key={index}></ProductsCard>
            ))}
          </div>
        </div>
        <div>
          <h1>Add New Product</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
