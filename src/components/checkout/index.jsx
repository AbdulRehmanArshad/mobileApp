import { useState } from "react";
import axios from "axios"
import Ordersummary from "../orderSummary";
import { useFormik, validateYupSchema } from "formik";
import { CheckoutSchema } from "./schemas";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { slice as orderCom } from "../../store/cartProduct/index"


const CheckoutForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [cashonDelivery, setCashonDelivery] = useState("Cash on delivery")
  const summaryItems = useSelector(state => state.cart.summary)
  const summarytotal = useSelector(state => state.cart.totalordersummary)

  let random = Math.floor(Math.random() * 25896);

  const initialValues = {
    email: "",
    fname: "",
    lname: "",
    company: "",
    address: "",
    appartment: "",
    city: "",
    country: "",
    state: "",
    postalcode: "",
    phonenumber: ""

  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: CheckoutSchema,
    onSubmit: (values) => {
      let a = { cashdelivery: cashonDelivery, random: random, total: summarytotal, values, summaryItems }
      let arr = []
      arr.push(a)
      // dispatch(orderCom.actions.viewOrder(arr))
      // console.log(summaryItems);
      // console.log(summarytotal);
      toast.success(" Order Successfull");
      Formusbmit(values)
      // axios.post("http://localhost:5000/orderdetail", {
      //   email: "values.email",
      //   name: "values.fname"
      // })
      //   .then((res) => console.log(res.data))



      // setTimeout(() => {
      //   navigate("/apple-mobile/quickdas/order")npm run start

      // }, 6000);
      // setTimeout()


    }
  })
  const Formusbmit = async () => {
    const { data } = await axios.post("http://localhost:5000/orderinfo",
      { headers: { "Access-Control-Allow-Origin": "*" } },
      {
        params: {
          firstname: "firstname"
        }
      })

    console.log("The frontdata", data);
  }
  return (

    <div className='bg-gray-50'>
      <ToastContainer />

      <div className='max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Checkout</h2>

        <form
          onSubmit={handleSubmit}
          className='lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16'>
          <div>
            <div>
              <h2 className='text-lg font-medium text-gray-900'>Contact information</h2>

              <div className='mt-4'>
                <label htmlFor='email-address' className='block text-sm font-medium text-gray-700'>
                  Email address
                </label>
                <div className='mt-1'>
                  <input
                    type='email'
                    id='email-address'
                    name='email'
                    autoComplete='off'
                    className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-2xm pb-2 pt-2	pl-2		'
                    value={values.email}
                    onChange={handleChange}
                  />
                  {
                    errors.email && touched.email ? (
                      <p style={{ color: "red" }} className="form-error">{errors.email}</p>
                    ) : null
                  }
                </div>
              </div>
            </div>

            <div className='mt-10 border-t border-gray-200 pt-10'>
              <h2 className='text-lg font-medium text-gray-900'>Shipping information</h2>

              <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                <div>
                  <label htmlFor='first-name' className='block text-sm font-medium text-gray-700'>
                    First name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='first-name'
                      name='fname'
                      autoComplete='off'
                      className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-2xm pb-2 pt-2	pl-2	'
                      value={values.fname}
                      onChange={handleChange}

                    />
                    {
                      errors.fname && touched.email ? (
                        <p style={{ color: "red" }} className="form-error">{errors.fname}</p>
                      ) : null
                    }
                  </div>
                </div>

                <div>
                  <label htmlFor='last-name' className='block text-sm font-medium text-gray-700'>
                    Last name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='last-name'
                      name='lname'
                      autoComplete='off'
                      className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-2xm pb-2 pt-2	pl-2	'
                      value={values.lname}
                      onChange={handleChange}

                    />
                    {
                      errors.lname && touched.email ? (
                        <p style={{ color: "red" }} className="form-error">{errors.lname}</p>
                      ) : null
                    }
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <label htmlFor='company' className='block text-sm font-medium text-gray-700'>
                    Company
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='company'
                      id='company'
                      autoComplete='off'
                      className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-2xm pb-2 pt-2	pl-2	'
                      value={values.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <label htmlFor='address' className='block text-sm font-medium text-gray-700'>
                    Address
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='address'
                      id='address'
                      autoComplete='off'
                      className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-2xm pb-2 pt-2	pl-2	'
                      value={values.address}
                      onChange={handleChange}
                    />
                    {
                      errors.address && touched.email ? (
                        <p style={{ color: "red" }} className="form-error">{errors.address}</p>
                      ) : null
                    }
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <label htmlFor='apartment' className='block text-sm font-medium text-gray-700'>
                    Apartment, suite, etc.
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='apartment'
                      id='appartment'
                      autoComplete='off'
                      className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-2xm pb-2 pt-2	pl-2	'
                      value={values.appartment}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='city' className='block text-sm font-medium text-gray-700'>
                    City
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='city'
                      id='city'
                      autoComplete='off'
                      className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-2xm pb-2 pt-2	pl-2	'
                      value={values.city}
                      onChange={handleChange}
                    />
                    {
                      errors.city && touched.city ? (
                        <p style={{ color: "red" }} className="form-error">{errors.city}</p>
                      ) : null
                    }
                  </div>

                </div>

                <div>
                  <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                    Country
                  </label>
                  <div className='mt-1'>
                    <select
                      id='country'
                      name='country'
                      autoComplete='off'
                      className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-2xm pb-2 pt-2	pl-2	'
                      value={values.country}
                      onChange={handleChange}
                    >
                      {
                        errors.country && touched.country ? (
                          <p style={{ color: "red" }} className="form-error">{errors.country}</p>
                        ) : null
                      }
                      <option >Select Country</option>

                      <option >Pakistan</option>
                      <option >Canada</option>
                      <option >Mexico</option>
                    </select>
                    {
                      errors.country && touched.country ? (
                        <p style={{ color: "red" }} className="form-error">{errors.country}</p>
                      ) : null
                    }
                  </div>
                </div>

                <div>
                  <label htmlFor='region' className='block text-sm font-medium text-gray-700'>
                    State / Province
                  </label>
                  <div className='mt-1'>
                    <div className='mt-1'>
                      <select
                        id='state'
                        name='state'
                        autoComplete="off"
                        className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-2xm pb-2 pt-2	pl-2	'
                        value={values.state}
                        onChange={handleChange}
                      >
                        <option >Select State</option>

                        <option>Punjab</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                      {
                        errors.state && touched.state ? (
                          <p style={{ color: "red" }} className="form-error">{errors.state}</p>
                        ) : null
                      }
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor='postal-code' className='block text-sm font-medium text-gray-700'>
                    Postal code
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='postalcode'
                      id='postal-code'
                      autoComplete='off'
                      className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-2xm pb-2 pt-2	pl-2	'
                      value={values.postalcode}
                      onChange={handleChange}

                    />
                    {
                      errors.postalcode && touched.postalcode ? (
                        <p style={{ color: "red" }} className="form-error">{errors.postalcode}</p>
                      ) : null
                    }
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
                    Phone
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='phonenumber'
                      id='phonenumber'
                      autoComplete='tel'
                      className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-2xm pb-2 pt-2	pl-2	'
                      value={values.phonenumber}
                      onChange={handleChange}
                    />
                    {
                      errors.phonenumber && touched.phonenumber ? (
                        <p style={{ color: "red" }} className="form-error">{errors.phonenumber}</p>
                      ) : null
                    }
                  </div>
                </div>
              </div>

            </div>

            {/* Payment */}

          </div>

          {/* Order summary */}

          <Ordersummary />
          <button
            // onClick={() => handleSubmit()}
            type="submit"
            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
            Confirm order
          </button>
        </form>

      </div>

    </div>

  );
};
export default CheckoutForm;
