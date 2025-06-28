import React from "react";

const Home = () => {
  return (
    <div className="px-8 mt-10">
      <div className="grid grid-col-1 md:grid-cols-3">
        <div className="col-span-2">
          <h1>Product List</h1>
        </div>
        <div>
          <h1>Add New Product</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
