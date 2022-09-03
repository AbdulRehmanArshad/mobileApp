/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppleItems from "../container/AppleItems";
import CartDas from "../container/CartDas";
import CheckoutPage from "../container/CheckoutPage";
import Dasboard from "../container/Dasboard";
import Quickdas from "../container/quickdas/quickdas";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dasboard />} />
          <Route path="/applemobile" element={<AppleItems />} />
          <Route path="/cartdas" element={<CartDas />} />
          <Route path="/cartdas/checkoutdas" element={<CheckoutPage />} />
          <Route path="/applemobile/quickdas" element={<Quickdas />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
