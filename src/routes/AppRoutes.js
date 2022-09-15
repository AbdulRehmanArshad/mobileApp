import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppleItems from "../containers/apple-items";
import CartDas from "../containers/cart-das";
import CheckoutPage from "../containers/checkout-page";
import CompeleteDas from "../containers/complete-order-das";
import Dashboard from "../containers/dashboard";
import PageNotFound from "../containers/page-not-found";
import QuickDas from "../containers/quick-das";
import AppLayout from "../layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/apple-mobile" element={<AppleItems />} />
          <Route path="/cart" element={<CartDas />} />
          <Route path="/cart/checkoutdas" element={<CheckoutPage />} />
          <Route path="/apple-mobile/quickdas" element={<QuickDas />} />
          <Route path="/apple-mobile/quickdas/order" element={<CompeleteDas />} />



          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
