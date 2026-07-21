import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {

    const [cart, setCart] = useState([]);


    // =================================
    // GET CART FROM LOCAL STORAGE
    // =================================

    useEffect(() => {

        const savedCart =
            JSON.parse(localStorage.getItem("cart")) || [];

        setCart(savedCart);

    }, []);


    // =================================
    // REMOVE PRODUCT
    // =================================

    const removeFromCart = (id) => {

        const updatedCart = cart.filter(
            (item) => item.id !== id
        );

        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );

    };


    // =================================
    // TOTAL PRICE
    // =================================

    const totalPrice = cart.reduce(
        (total, item) =>
            total + Number(item.price),
        0
    );


    return (

        <div className="min-h-screen bg-gray-100 p-6 md:p-10">

            <div className="mx-auto max-w-6xl">


                {/* =================================
                    HEADING
                ================================= */}

                <h1 className="mb-8 text-4xl font-bold">
                    🛒 My Cart
                </h1>


                {/* =================================
                    EMPTY CART
                ================================= */}

                {cart.length === 0 ? (

                    <div className="rounded-xl bg-white p-10 text-center shadow-lg">

                        <h2 className="text-2xl font-bold">
                            Your Cart is Empty
                        </h2>

                        <p className="mt-3 text-gray-500">
                            Add some products to your cart.
                        </p>


                        <Link
                            to="/course"
                            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                        >
                            Continue Shopping
                        </Link>

                    </div>

                ) : (

                    <div className="grid gap-8 lg:grid-cols-3">


                        {/* =================================
                            CART PRODUCTS
                        ================================= */}

                        <div className="space-y-5 lg:col-span-2">

                            {cart.map((item) => (

                                <div
                                    key={item.id}
                                    className="flex flex-col gap-5 rounded-xl bg-white p-5 shadow-md sm:flex-row sm:items-center"
                                >


                                    {/* IMAGE */}

                                    <div className="flex h-32 w-32 items-center justify-center">

                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-full w-full object-contain"
                                        />

                                    </div>


                                    {/* DETAILS */}

                                    <div className="flex-1">

                                        <h2 className="text-lg font-bold">
                                            {item.title}
                                        </h2>

                                        <p className="mt-2 capitalize text-gray-500">
                                            {item.category}
                                        </p>

                                        <p className="mt-3 text-xl font-bold text-green-600">
                                            ${Number(item.price).toFixed(2)}
                                        </p>

                                    </div>


                                    {/* REMOVE */}

                                    <button
                                        onClick={() =>
                                            removeFromCart(item.id)
                                        }
                                        className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
                                    >
                                        🗑️ Remove
                                    </button>

                                </div>

                            ))}

                        </div>


                        {/* =================================
                            ORDER SUMMARY
                        ================================= */}

                        <div className="h-fit rounded-xl bg-white p-6 shadow-lg">

                            <h2 className="text-2xl font-bold">
                                Order Summary
                            </h2>


                            {/* PRODUCTS */}

                            <div className="mt-6 flex justify-between">

                                <span>
                                    Products
                                </span>

                                <span>
                                    {cart.length}
                                </span>

                            </div>


                            {/* TOTAL */}

                            <div className="mt-4 flex justify-between">

                                <span>
                                    Total
                                </span>

                                <span className="text-2xl font-bold text-green-600">
                                    ${totalPrice.toFixed(2)}
                                </span>

                            </div>


                            {/* =================================
                                PROCEED TO CHECKOUT
                            ================================= */}

                            <Link
                                to="/checkout"
                                className="mt-6 block w-full rounded-lg bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700"
                            >
                                💳 Proceed To Checkout
                            </Link>

                        </div>

                    </div>

                )}

            </div>

        </div>

    );

};

export default Cart;