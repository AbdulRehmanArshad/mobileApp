import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { slice as cartPro } from "../../store/cartProduct";
import { useNavigate } from "react-router-dom";
import { slice as productview } from "../../store/cartProduct";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css";
const AppleProduct = () => {
  const navigate = useNavigate();
  const [appleapi, setAppleapi] = useState([]);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const AddCartItems = (item, index) => {
    toast.success("Your Item in Your cart", { autoClose: 1000 });
    dispatch(cartPro.actions.cartItems(item));



  };
  const Quickcart = (item, index) => {
    console.log("🚀 ~ file: index.jsx ~ line 31 ~ Quickcart ~ item", item);
    navigate("/apple-mobile/quickdas");
    dispatch(productview.actions.Quickview(item));

  };

  const displayUser = appleapi.map((item, index) => {
    return (
      <>
        <div className=' relative ' key={item._id}>
          <div className=' absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 '>
            <p className='text-xs leading-3 text-gray-800'>New</p>
          </div>
          <div className=' relative group'>
            <div className=' flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full'></div>
            <img
              className=' w-full h-98 w-50 ...'
              src={item.img}
              alt='A girl Posing Img'
              style={{
                borderRadius: "25px",
                height: "350px",
                width: "500px",
                // objectFit: cover,
              }}
            />
            <div className=' absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100'>
              <button
                onClick={() => AddCartItems(item, index)}
                color="primary"
                active={true}
                className=' font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full'
              >
                Add to bag
              </button>
              <button
                onClick={() => Quickcart(item, index)}
                className=' bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white'
              >
                Quick View
              </button>
            </div>
          </div>
          <p className=' font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4'>{item.tittle}</p>
          <p className=' font-semibold text-xl leading-5 text-gray-800 mt-4'>{item.Price}</p>
          <p className=' font-normal text-base leading-4 text-gray-600 mt-4'>2 colours</p>
        </div>
      </>
    );
  });

  const handleBtn = (params) => {
    setLoading(true);
  };
  useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:5000/appleinfo")
      .then(res => setAppleapi(res.data))
    setLoading(false)

  }, [])
  return (
    <>
      <ToastContainer />


      {/* <CartSilder leftSlider={cartSliderShow} /> */}
      <div className=' 2xl:container 2xl:mx-auto'>
        <div className=' bg-gray-50 text-center lg:py-10 md:py-8 py-6'>
          <p className=' w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800'>
            Appple Mobiles
          </p>
        </div>
        <div className=' py-6 lg:px-20 md:px-6 px-4'>
          <p className=' font-normal text-sm leading-3 text-gray-600 '>Home / Shop by Category / Women</p>
          <hr className=' w-full bg-gray-200 my-6' />

          <div className=' flex justify-between items-center'>
            <div className=' flex space-x-3 justify-center items-center'>
              <svg
                className=' cursor-pointer'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M3.75 7.5H20.25' stroke='#1F2937' strokeMiterlimit='10' strokeLinecap='round' />
                <path d='M3.75 12H20.25' stroke='#1F2937' strokeMiterlimit='10' strokeLinecap='round' />
                <path d='M3.75 16.5H20.25' stroke='#1F2937' strokeMiterlimit='10' strokeLinecap='round' />
              </svg>
              <p className=' font-normal text-base leading-4 text-gray-800'>Filter</p>
            </div>
            <p className=' cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600'>
              Showing 18 products
            </p>
          </div>

          <div className=' grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10'>
            {displayUser}
          </div>
        </div>
      </div>


      <div
        style={{
          position: "fixed",
          bottom: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {loading && (
          <ThreeDots
            height='80'
            width='80'
            radius='9'
            color='black'
            ariaLabel='three-dots-loading'
            wrapperStyle={{}}
            wrapperClassName=''
            visible={true}
          />
        )}
      </div>
      <button onClick={handleBtn}>Button</button>
    </>
  );
};
export default AppleProduct;
