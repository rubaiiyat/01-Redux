import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../Redux/Features/CartSlice";

const CartItem = ({ cart }) => {
  const { id, name, img, price, quantity } = cart;

  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(increaseQuantity(id));
    console.log("Working");
  };
  const decreaseHandler = () => {
    dispatch(decreaseQuantity(id));
    console.log("Working");
  };
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <a href="#" className="shrink-0 md:order-1">
                    <img
                      className="hidden h-32 w-32 rounded-2xl dark:block"
                      src={img}
                      alt="imac dark"
                    />
                  </a>

                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                      <button
                        onClick={decreaseHandler}
                        type="button"
                        className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <svg
                          className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                          fill="none"
                          viewBox="0 0 18 2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1h16"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        value={quantity}
                        className="w-10 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none dark:text-white"
                      />
                      <button
                        onClick={increaseHandler}
                        type="button"
                        className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <svg
                          className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                          fill="none"
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 1v16M1 9h16"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                      <p className="text-base font-bold text-gray-900 dark:text-white">
                        ${price * quantity}
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a
                      href="#"
                      className="text-xl font-medium text-gray-900 hover:underline dark:text-white "
                    >
                      {name}
                    </a>

                    <div className="flex items-center gap-4 mt-3">
                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                      >
                        <svg
                          className="me-1.5 h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                        Add to Favorites
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                      >
                        <svg
                          className="me-1.5 h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18 17.94 6M18 18 6.06 6"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
