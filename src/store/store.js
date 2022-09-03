/** @format */

const { configureStore } = require("@reduxjs/toolkit");
const { cartReducer } = require("./slice/slice");

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
