/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { slice as cartsummary } from "../../store/cartProduct/index"
import { slice as summarytotal } from "../../store/cartProduct/index"

const CalculationCart = ({ totalvalue, viewSummary }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const HandleCheckout = () => {
    navigate("./checkoutdas");
    console.log("View SUmmary", viewSummary);
    dispatch(cartsummary.actions.orderSummary(viewSummary))
    dispatch(summarytotal.actions.totalsummary(totalvalue))



  };
  return (
    <>
      <div class="container p-8 mx-auto mt-12">

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
