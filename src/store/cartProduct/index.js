/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  Remove: [],
  minusIcon: [],
  updateIncrese: [],
  updateDecrease: [],
  view: {},
  summary: [],
  totalordersummary: 0,
  bestProduct: [],
  Quickcart: [],
  vieworder: []

};
export const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartItems: (state, action) => {
      console.log(action.payload);
      let arr = state.cart;
      arr.push(action.payload);
      const uniqueIds = [];

      const unique = arr.filter((element) => {
        const isDuplicate = uniqueIds.includes(element.id);

        if (!isDuplicate) {
          uniqueIds.push(element.id);

          return true;
        }

        return false;
      });

      // 👇️ [{id: 1, name: 'Tom'}, {id: 2, name: 'Nick'}]
      state.cart = unique;

      return state;
    },
    RemoveIcon: (state, action) => {
      let arr = state.cart;

      let a = arr.filter((_) => {
        return _.id !== _.id;
      });
      state.cart = a;
      return state;
    },
    MinusRemoveIcon: (state, action) => {
      let arr = state.cart;

      let a = arr.filter((_) => {
        return _.id !== _.id;
      });
      state.cart = a;
      return state;
    },
    Increaseredux: (state, action) => {
      state.cart = action.payload;
      let arr = state.cart;
      let arr2 = arr.map((e) => {
        return e.id === e.id
          ? { ...e, quantity: e.quantity + 1, Price: e.Price }
          : e;
      });
    },
    DecreaseRedux: (state, action) => {
      state.cart = action.payload;
      let arr = state.cart;
      let arr2 = arr.map((e) => {
        return e.id === e.id
          ? { ...e, quantity: e.quantity + 1, Price: e.Price }
          : e;
      });
    },
    Quickview: (state, action) => {
      state.view = action.payload
      return state
    },
    orderSummary: (state, action) => {
      console.log("Hy OrderSUmary", (action.payload))
      state.summary = action.payload
      return state
    },
    totalsummary: (state, action) => {
      state.totalordersummary = action.payload
      return state
    },
    BestSellingProduct: (state, action) => {
      let arr = state.cart;
      arr.push(action.payload);
      state.bestProduct = arr

      return state;

    },
    allQuickvalue: (state, action) => {
      let arr = state.cart;
      arr.push(action.payload);
      state.Quickcart = arr

      return state;

    },
    viewOrder: (state, action) => {
      state.vieworder = action.payload
      return state
    }
  }
});
export default slice.reducer;
