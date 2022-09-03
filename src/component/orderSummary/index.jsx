import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const Ordersummary = () => {
    const products = [
        {
            id: 1,
            title: "Basic Tee",
            href: "#",
            price: "$32.00",
            color: "Black",
            size: "Large",
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
        }, {
            id: 1,
            title: "Basic Tee",
            href: "#",
            price: "$32.00",
            color: "Black",
            size: "Large",
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
        },
        {
            id: 1,
            title: "Basic Tee",
            href: "#",
            price: "$32.00",
            color: "Black",
            size: "Large",
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
        }, {
            id: 1,
            title: "Basic Tee",
            href: "#",
            price: "$32.00",
            color: "Black",
            size: "Large",
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
        },
        // More products...
    ];
    return (
        <>
            <div className="mt-10 lg:mt-0">
                <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

                <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <h3 className="sr-only">Items in your cart</h3>
                    <ul role="list" className="divide-y divide-gray-200 ">
                        <SimpleBar style={{ maxHeight: 250 }}>
                            {products.map((product) => (
                                <li key={product.id} className="flex py-6 px-4 sm:px-6">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="w-20 rounded-md"
                                        />
                                    </div>

                                    <div className="ml-6 flex-1 flex flex-col">
                                        <div className="flex">
                                            <div className="min-w-0 flex-1">
                                                <h4 className="text-sm">
                                                    <a
                                                        href={product.href}
                                                        className="font-medium text-gray-700 hover:text-gray-800">
                                                        {product.title}
                                                    </a>
                                                </h4>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    {product.color}
                                                </p>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    {product.size}
                                                </p>
                                            </div>

                                            <div className="ml-4 flex-shrink-0 flow-root">
                                                <button
                                                    type="button"
                                                    className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500">
                                                    <span className="sr-only">Remove</span>
                                                    {/* <TrashIcon className="h-5 w-5" aria-hidden="true" /> */}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex-1 pt-2 flex items-end justify-between">
                                            <p className="mt-1 text-sm font-medium text-gray-900">
                                                {product.price}
                                            </p>

                                            <div className="ml-4">

                                                <div
                                                    id="quantity"
                                                    name="quantity"
                                                    className="rounded-md border border-gray-300 text-base font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-2xm pb-2 pt-2	pl-2 mx-2	">
                                                    <p className='mx-2'>2</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </SimpleBar>


                    </ul>

                    <div className="mt-10 border-t border-gray-200 pt-10 py-6 px-4 	">
                        <h1 className="text-lg font-medium text-gray-900">Payment Method</h1>


                        <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10 ">
                                <label
                                    // htmlFor="card-number"
                                    className="block text-sm font-medium text-gray-700 ">
                                    Cash on Delivery
                                </label>
                            </div>
                        </div>
                        <input
                            id=""
                            name="payment-type"
                            type="radio"
                            defaultChecked
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 mt-2.5		"
                        />
                        <label
                            // htmlFor="card-number"
                            className="block text-sm font-medium text-gray-700">
                            Online Payment
                        </label>
                        <div >


                        </div>
                        <input
                            id=""
                            name="payment-type"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 mt-2.5"
                        />

                    </div>
                    <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Subtotal</dt>
                            <dd className="text-sm font-medium text-gray-900">$64.00</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Shipping</dt>
                            <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Taxes</dt>
                            <dd className="text-sm font-medium text-gray-900">$5.52</dd>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                            <dt className="text-base font-medium">Total</dt>
                            <dd className="text-base font-medium text-gray-900">
                                $75.52
                            </dd>
                        </div>
                    </dl>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                            Confirm order
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ordersummary;