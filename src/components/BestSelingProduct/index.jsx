/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import sellingProduct from "./BestSelling.js"
import { slice as BestP } from "../../store/cartProduct/index"


const BestSellingProduct = () => {
  const dispatch = useDispatch()
  const AddinCart = (item, index) => {
    dispatch(BestP.actions.BestSellingProduct(item))
    console.log(item);

  }
  return (
    <>
      <div className="pb-16">
        <div className="bg-gray-100 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
          <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
            <div>
              <p className="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800">
                Best Seller Products
              </p>
            </div>
            <div>
              <p className="text-base leading-normal sm:leading-none text-center text-gray-600">
                Explore products that are bought most frequently by people
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-16 sm:-mt-48 lg:-mt-32 xl:-mt-40 2xl:container 2xl:mx-auto flex justify-center items-center space-y-4 px-4 md:px-6 2xl:px-0 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-between gap-x-6 gap-y-5">
            {
              sellingProduct.map((item, index) => {
                return (
                  <>
                    <div className="flex flex-col justify-center items-start p-2 bg-white">
                      <div className="relative">
                        <img
                          style={{ width: "200px", height: "150px" }}
                          className="lg:block hidden"
                          src={item.img}
                          alt="headphones"
                        />
                        <img
                          className="lg:hidden"
                          src={item.img}
                          alt="headphones"
                        />

                        <button
                          onClick={() => AddinCart(item, index)}
                          className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                          <svg
                            className="fill-stroke"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <div className="flex justify-between mt-4">
                          <div>
                            <p className="text-lg font-medium leading-none text-gray-800">
                              {item.tittle}
                            </p>
                          </div>
                          <div>
                            <p className="text-lg leading-none text-right text-gray-600">
                              {item.Price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }


          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellingProduct;
