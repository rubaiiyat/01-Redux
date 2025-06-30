import React from "react";

const ProductsCard = ({ product }) => {
  const { id, name, img, description, price, category, date } = product || {};

  return (
    <div>
      <div className="card bg-base-100 w-72 lg:w-80  shadow-lg mx-auto">
        <figure>
          <img src={img} alt="Shoes" className="w-full h-48 bg-cover" />
        </figure>
        <div className="card-body">
          <h3 className="text-info font-bold text-base">#{category}</h3>
          <h2 className="card-title">{name}</h2>
          <p className="text-gray-300">{description}</p>

          <div className="card-actions justify-end items-center mt-2">
            <p className="text-lg font-bold">${price}</p>
            <button className="btn btn-info">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
