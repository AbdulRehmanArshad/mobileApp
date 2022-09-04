/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { slice as removeicon } from "../../store/cartProduct/index";
import { useDispatch } from "react-redux";
import CalculationCart from "../CalculationCart";
import { slice as minus } from "../../store/cartProduct/index";
import { slice as increaseValueRedux } from "../../store/cartProduct/index";
import { slice as DecreasevalueRedux } from "../../store/cartProduct/index";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const [cartItemState, setCartItemState] = useState(cartItems.cart);
  const [input, setInput] = useState();
  const [totalCartvalue, setTotalCartvalue] = useState();
  const [totalquantityvalue, setTotalQuantityvalue] = useState();
  const [IsShow, setIsShow] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleClick = (params) => {
    console.log(cartItemState);
  };
  let total = 0;
  const Increasevalue = (item, index) => {
    console.log(cartItemState);
    total = cartItemState[0].total;
    console.log(total);
    const arr = cartItemState.map((e) => {
      return e.id === item.id ? { ...e, quantity: e.quantity + 1, Price: e.Price + total } : e;
    });
    dispatch(increaseValueRedux.actions.Increaseredux(arr));
    setCartItemState(arr);
    console.log(arr);
  };
  const Decreasevalue = (item, index) => {
    console.log(cartItemState);
    total = cartItemState[0].total;
    let arr = cartItemState.map((_) => {
      return _.id === item.id ? { ..._, quantity: _.quantity - 1, Price: _.Price - total } : _;
    });
    // setCartItemState(arr);
    console.log(arr);
    let arr2 = arr.filter((_, i) => {
      return _.quantity !== 0;
    });
    dispatch(minus.actions.MinusRemoveIcon(arr2));
    dispatch(DecreasevalueRedux.actions.DecreaseRedux(arr2));
    setCartItemState(arr2);
  };
  const RemoveItem = (item, index) => {
    let arr = cartItemState.filter((_) => {
      return item.id !== _.id;
    });

    setCartItemState(arr);
    dispatch(removeicon.actions.RemoveIcon(item));
  };

  useEffect(() => {
    let sumcartValue = 0;
    cartItemState.forEach((_) => {
      sumcartValue += _.Price;
    });

    setTotalCartvalue(sumcartValue);
    console.log(sumcartValue);

    let showcartlist = 0;
    cartItemState.forEach((_) => {
      showcartlist += _.quantity;
    });
    setTotalQuantityvalue(showcartlist);

    if (cartItemState.length !== 0) {
      setIsShow(false);
    }
  });
  const handleReturn = () => {
    navigate("/apple-mobile");
  };
  return (
    <>
      {IsShow ? (
        <div className='flex flex-col items-center justify-center h-screen'>
          <img src='https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png' />
          <button className='bg-blue-700 text-white p-4 m-4 rounded shadow' onClick={() => handleReturn()}>
            Back
          </button>
        </div>
      ) : (
        <>
          <div className='container p-8 mx-auto mt-12'>
            <div className='w-full overflow-x-auto'>
              <div className='my-2'>
                <h3 className='text-xl font-bold tracking-wider'>Shopping Cart {totalquantityvalue} item</h3>
              </div>
              <table className='w-full shadow-inner'>
                <thead>
                  <tr className='bg-gray-100'>
                    <th className='px-6 py-3 font-bold whitespace-nowrap'>Image</th>
                    <th className='px-6 py-3 font-bold whitespace-nowrap'>Product</th>
                    <th className='px-6 py-3 font-bold whitespace-nowrap'>Qty</th>
                    <th className='px-6 py-3 font-bold whitespace-nowrap'>Price</th>
                    <th className='px-6 py-3 font-bold whitespace-nowrap'>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItemState.map((item, index) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <div className='flex justify-center'>
                              <img
                                src={item.img}
                                className='object-cover h-28 w-28 rounded-2xl'
                                alt='image'
                              />
                            </div>
                          </td>
                          <td className='p-4 px-6 text-center whitespace-nowrap'>
                            <div className='flex flex-col items-center justify-center'>
                              <h3>{item.tittle}</h3>
                            </div>
                          </td>
                          <td className='p-4 px-6 text-center whitespace-nowrap'>
                            <div>
                              <button onClick={(e) => Decreasevalue(item, index)}>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='inline-flex w-6 h-6 text-red-600'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'
                                >
                                  <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                                  />
                                </svg>
                              </button>
                              <input
                                type='text'
                                name='qty'
                                value={item.quantity}
                                className='w-12 text-center bg-gray-100 outline-none'
                                onChange={(e) => setInput(e.target.value)}
                              />
                              <button onClick={() => Increasevalue(item, index)}>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='inline-flex w-6 h-6 text-green-600'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'
                                >
                                  <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                                  />
                                </svg>
                              </button>
                            </div>
                          </td>
                          <td className='p-4 px-6 text-center whitespace-nowrap'>{item.Price}</td>
                          <td className='p-4 px-6 text-center whitespace-nowrap'>
                            <button onClick={() => RemoveItem(item, index)}>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-6 h-6 text-red-400'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                              >
                                <path
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  stroke-width='2'
                                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <button onClick={HandleClick}>Level</button>
          <CalculationCart totalvalue={totalCartvalue} />
        </>
      )}
    </>
  );
};

export default Cart;
