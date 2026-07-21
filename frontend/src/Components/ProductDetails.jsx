import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {

    // =================================
    // GET PRODUCT ID FROM URL
    // Example: /product/5
    // =================================

    const { id } = useParams();


    // =================================
    // PRODUCT STATE
    // =================================

    const [product, setProduct] = useState(null);


    // =================================
    // GET PRODUCT BY ID
    // =================================

    useEffect(() => {

        const getProduct = async () => {

            try {

                const response = await fetch(
                    `https://fakestoreapi.com/products/${id}`
                );


                // Check API response

                if (!response.ok) {

                    throw new Error(
                        "Product not found"
                    );

                }


                // Convert response into JSON

                const data =
                    await response.json();


                // Store product

                setProduct(data);


            } catch (error) {

                console.error(
                    "Error fetching product:",
                    error
                );

            }

        };


        // Call function

        getProduct();

    }, [id]);


    // =================================
    // ADD PRODUCT TO CART
    // =================================

    const handleAddToCart = () => {

        // ---------------------------------
        // 1. Get existing cart
        // ---------------------------------

        const existingCart =
            JSON.parse(
                localStorage.getItem("cart")
            ) || [];


        // ---------------------------------
        // 2. Check product already exists
        // ---------------------------------

        const productExist =
            existingCart.some(
                (item) =>
                    item.id === product.id
            );


        // ---------------------------------
        // 3. If product already exists
        // ---------------------------------

        if (productExist) {

            alert(
                "Product already added to cart!"
            );

            return;

        }


        // ---------------------------------
        // 4. Add new product
        // ---------------------------------

        const updatedCart = [
            ...existingCart,
            product
        ];


        // ---------------------------------
        // 5. Save cart in LocalStorage
        // ---------------------------------

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );


        // ---------------------------------
        // 6. Notify Navbar
        // ---------------------------------

        window.dispatchEvent(
            new Event("cartUpdated")
        );


        // ---------------------------------
        // 7. Success message
        // ---------------------------------

        alert(
            "Product Added To Cart 🛒"
        );

    };


    // =================================
    // LOADING
    // =================================

    if (!product) {

        return (

            <div className="flex min-h-screen items-center justify-center">

                <h1 className="text-2xl font-bold">
                    Loading...
                </h1>

            </div>

        );

    }


    // =================================
    // PRODUCT DETAILS UI
    // =================================

    return (

        <div className="min-h-screen bg-gray-100 p-6 md:p-10">

            <div className="mx-auto max-w-6xl">


                {/* =================================
                    BACK BUTTON
                ================================= */}

                <Link
                    to="/course"
                    className="mb-5 inline-block rounded-lg bg-gray-800 px-5 py-2 text-white transition hover:bg-gray-900"
                >
                    ← Back to Products
                </Link>


                {/* =================================
                    PRODUCT DETAILS CARD
                ================================= */}

                <div className="rounded-xl bg-white p-6 shadow-lg md:p-10">

                    <div className="grid items-center gap-10 md:grid-cols-2">


                        {/* =================================
                            PRODUCT IMAGE
                        ================================= */}

                        <div className="flex h-[500px] items-center justify-center">

                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-full w-full object-contain"
                            />

                        </div>


                        {/* =================================
                            PRODUCT INFORMATION
                        ================================= */}

                        <div>


                            {/* CATEGORY */}

                            <p className="text-lg capitalize text-gray-500">

                                {product.category}

                            </p>


                            {/* TITLE */}

                            <h1 className="mt-3 text-3xl font-bold text-gray-800 md:text-4xl">

                                {product.title}

                            </h1>


                            {/* =================================
                                RATING
                            ================================= */}

                            <div className="mt-5 flex items-center gap-2">

                                <span className="text-xl text-yellow-500">
                                    ⭐
                                </span>

                                <span className="font-semibold">

                                    {product.rating.rate}

                                </span>

                                <span className="text-gray-500">

                                    ({product.rating.count} Reviews)

                                </span>

                            </div>


                            {/* =================================
                                PRICE
                            ================================= */}

                            <h2 className="mt-6 text-4xl font-bold text-green-600">

                                ${product.price}

                            </h2>


                            {/* =================================
                                DESCRIPTION
                            ================================= */}

                            <p className="mt-6 text-lg leading-8 text-gray-600">

                                {product.description}

                            </p>


                            {/* =================================
                                BUTTONS
                            ================================= */}

                            <div className="mt-8 flex flex-wrap gap-4">


                                {/* =================================
                                    ADD TO CART
                                ================================= */}

                                <button
                                    onClick={handleAddToCart}
                                    className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
                                >
                                    🛒 Add To Cart
                                </button>


                                {/* =================================
                                    VIEW CART
                                ================================= */}

                                <Link
                                    to="/cart"
                                    className="rounded-lg border border-blue-600 px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                                >
                                    🛒 View Cart
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default ProductDetails;