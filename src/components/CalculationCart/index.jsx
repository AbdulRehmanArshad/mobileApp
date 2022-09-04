/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
const CalculationCart = ({ totalvalue }) => {
  const navigate = useNavigate();
  const HandleCheckout = () => {
    navigate("./checkoutdas");
  };
  return (
    <>
      <div class="container p-8 mx-auto mt-12">
        <div class="lg:w-2/4">
          <div class="mt-4">
            <div class="px-4 py-4 rounded-md">
              <label for="coupon code" class="font-semibold text-gray-600">
                Coupon Code
              </label>
              <input
                type="text"
                placeholder="coupon code"
                value="LARA#234"
                class="
                  w-full
                  px-2
                  py-2
                  border border-blue-600
                  rounded-md
                  outline-none
                "
              />
              <span class="block text-green-600">
                Coupon code applied successfully
              </span>
              <button
                class="
                  px-6
                  py-2
                  mt-2
                  text-sm text-indigo-100
                  bg-indigo-600
                  rounded-md
                  hover:bg-indigo-700
                ">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="py-4 rounded-md shadow">
            <h3 class="text-xl font-bold text-blue-600">Order Summary</h3>
            <div class="flex justify-between px-4">
              <span class="font-bold">Subtotal</span>
              <span class="font-bold">$35.25</span>
            </div>
            <div class="flex justify-between px-4">
              <span class="font-bold">Discount</span>
              <span class="font-bold text-red-600">- $5.00</span>
            </div>
            <div class="flex justify-between px-4">
              <span class="font-bold">Sales Tax</span>
              <span class="font-bold">$2.25</span>
            </div>
            <div
              class="
                flex
                items-center
                justify-between
                px-4
                py-2
                mt-3
                border-t-2
              ">
              <span class="text-xl font-bold">Total</span>
              <span class="text-2xl font-bold">{totalvalue}</span>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <button
            onClick={HandleCheckout}
            class="
              w-full
              py-2
              text-center text-white
              bg-blue-500
              rounded-md
              shadow
              hover:bg-blue-600
            ">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CalculationCart;
