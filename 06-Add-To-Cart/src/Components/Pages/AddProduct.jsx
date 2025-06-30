import React from "react";

const AddProduct = () => {
  return (
    <div className="max-w-lg mx-auto px-6 py-10 md:-mt-14 md:fixed">
      <h1 className="text-2xl font-bold text-center mb-5 text-info">
        Add New Product
      </h1>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-base-200 p-8 rounded-xl shadow-lg">
        {/* Product Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter product name"
            className="input input-bordered bg-base-100 focus:border-info focus:ring-info transition duration-300"
            required
          />
        </div>

        {/* Image URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Image URL</span>
          </label>
          <input
            type="url"
            placeholder="Paste image link"
            className="input input-bordered bg-base-100 focus:border-info focus:ring-info transition duration-300"
            required
          />
        </div>

        {/* Short Description */}
        <div className="form-control md:col-span-2">
          <label className="label">
            <span className="label-text ">Short Description (8–10 words)</span>
          </label>
          <input
            type="text"
            placeholder="A modern ceramic plate for elegant meals"
            className="input input-bordered bg-base-100 focus:border-info focus:ring-info transition duration-300"
            maxLength={60}
            required
          />
        </div>

        {/* Price */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Price ($)</span>
          </label>
          <input
            type="number"
            placeholder="e.g. 49.99"
            className="input input-bordered bg-base-100 focus:border-info focus:ring-info transition duration-300"
            min="0"
            step="0.01"
            required
          />
        </div>

        {/* Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Category</span>
          </label>
          <select
            className="select select-bordered bg-base-100 focus:border-info focus:ring-info transition duration-300"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Choose category
            </option>
            <option>Makeup</option>
            <option>Electronics</option>
            <option>Home & Kitchen</option>
            <option>Fashion</option>
            <option>Other</option>
          </select>
        </div>

        {/* Date */}
        <div className="form-control md:col-span-2">
          <label className="label">
            <span className="label-text ">Date</span>
          </label>
          <input
            type="date"
            className="input input-bordered bg-base-100 focus:border-info focus:ring-info transition duration-300"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control md:col-span-2 mt-6">
          <button
            type="submit"
            className="btn btn-info w-full text-lg  tracking-wide hover:brightness-110 transition duration-300"
          >
            Submit Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
