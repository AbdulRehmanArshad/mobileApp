import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropDown, setDropDown] = useState(true);
  const [text, setText] = useState("");
  const { cart: quantity } = useSelector((state) => state.cart);

  const setSelectedText = (txt) => {
    setText(txt);
    setDropDown(true);
  };

  return (
    <div className='2xl:container 2xl:mx-auto'>
      <div className='bg-white rounded shadow-lg py-5 px-4'>
        <nav className='flex justify-between'>
          <div className='flex items-center pr-6 hover:cursor-pointer'>
            <Link to='/'>
              <svg
                className='cursor-pointer'
                width={34}
                height={34}
                viewBox='0 0 34 34'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z'
                  fill='#1F2937'
                />
              </svg>
            </Link>
            <h2 className='font-normal text-2xl leading-6 text-gray-800'>AR MOBILES</h2>
          </div>
          {/* For medium and plus sized devices */}
          <ul className='hidden md:flex flex-auto align-middle'>
            <li>
              <Link
                className={`${
                  location.pathname === "/"
                    ? "text-white bg-indigo-600"
                    : "text-gray-600 border border-white bg-gray-50"
                }  focus:outline-none focus:ring-2 focus:ring-offset-2 mr-4 focus:ring-gray-800 cursor-pointer p-4 font-normal text-xs leading-3 shadow-md rounded`}
                to='/'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  location.pathname === "/apple-mobile"
                    ? "text-white bg-indigo-600"
                    : "text-gray-600 border border-white bg-gray-50"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 mr-4 focus:ring-gray-800 cursor-pointer p-4 font-normal text-xs leading-3 shadow-md rounded`}
                to='/apple-mobile'
              >
                Apple Mobile
              </Link>
            </li>
          </ul>
          <div className=' flex space-x-5 justify-center items-center pl-2'>
            <div className='flex'>
              <div class='relative w-full'>
                <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                  <svg
                    aria-hidden='true'
                    class='w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </div>
                <input
                  type='text'
                  id='simple-search'
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Search'
                  required
                />
              </div>
              <button
                type='submit'
                class='p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                <svg
                  class='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  ></path>
                </svg>
                <span class='sr-only'>Search</span>
              </button>
            </div>
            <div className='relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='feather feather-shopping-cart'
                onClick={() => navigate("/cart")}
              >
                <circle cx='9' cy='21' r='1'></circle>
                <circle cx='20' cy='21' r='1'></circle>
                <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'></path>
              </svg>
              <div className='' />
              <div className=' w-1.5 h-1.5 absolute -top-3 -right-2 m-auto shadow-lg rounded border-inherit '>
                {quantity.length}
              </div>
            </div>
            <svg
              className='cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 '
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z'
                stroke='#1F2937'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21'
                stroke='#1F2937'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </nav>
        {/* for smaller devcies */}
        <div className='block md:hidden w-full mt-5 '>
          <div
            onClick={() => setDropDown(!dropDown)}
            className='cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full'
          >
            <div className='flex space-x-2'>
              <span id='s1' className={`${text.length != 0 ? "" : "hidden"} font-semibold text-sm leading-3`}>
                Selected:{" "}
              </span>
              <p
                id='textClicked'
                className='font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer '
              >
                {text ? text : "Collections"}
              </p>
            </div>
            <svg
              id='ArrowSVG'
              className={`${dropDown ? "" : "rotate-180"} transform duration-100`}
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 9L12 15L18 9'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className=' relative'>
            <ul
              id='list'
              className={`${
                dropDown ? "hidden" : "block"
              } font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md`}
            >
              <li
                onClick={() => setSelectedText("Apple Mobiles")}
                className='px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal'
              >
                Apple Mobiles
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
