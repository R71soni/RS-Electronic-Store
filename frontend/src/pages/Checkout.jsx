import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

const Checkout = () => {

    const [cart, setCart] = useState([]);

    // Tumhara UPI ID
    const UPI_ID = "12ritesh2001@ybl";

    useEffect(() => {

        const savedCart =
            JSON.parse(localStorage.getItem("cart")) || [];

        setCart(savedCart);

    }, []);


    // Total amount
    const totalAmount = cart.reduce(
        (total, item) =>
            total + Number(item.price),
        0
    );


    // UPI Payment URL
    const upiUrl =
        `upi://pay?pa=${UPI_ID}` +
        `&pn=RS%20Electronic` +
        `&am=${totalAmount.toFixed(2)}` +
        `&cu=INR`;


    return (

        <div className="min-h-screen bg-gray-100 p-6">

            <div className="mx-auto max-w-5xl">

                <h1 className="mb-8 text-center text-4xl font-bold">
                    🛒 Checkout
                </h1>


                <div className="grid gap-8 md:grid-cols-2">


                    {/* =========================
                        ORDER SUMMARY
                    ========================= */}

                    <div className="rounded-xl bg-white p-6 shadow">

                        <h2 className="mb-5 text-2xl font-bold">
                            Order Summary
                        </h2>


                        {cart.map((item) => (

                            <div
                                key={item.id}
                                className="mb-5 flex items-center gap-4 border-b pb-4"
                            >

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-20 w-20 object-contain"
                                />


                                <div>

                                    <h3 className="font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-green-600 font-bold">
                                        ₹{item.price}
                                    </p>

                                </div>

                            </div>

                        ))}


                        {/* TOTAL */}

                        <div className="mt-6 flex justify-between">

                            <h2 className="text-2xl font-bold">
                                Total
                            </h2>

                            <h2 className="text-2xl font-bold text-green-600">
                                ₹{totalAmount.toFixed(2)}
                            </h2>

                        </div>

                    </div>


                    {/* =========================
                        UPI PAYMENT
                    ========================= */}

                    <div className="flex flex-col items-center rounded-xl bg-white p-8 shadow">

                        <h2 className="text-2xl font-bold">
                            Scan & Pay
                        </h2>


                        <p className="mt-2 text-gray-500">
                            Scan this QR using any UPI app
                        </p>


                        {/* QR CODE */}

                        <div className="mt-6 rounded-xl border-4 border-blue-600 p-4">

                            <QRCodeSVG
                                value={upiUrl}
                                size={250}
                            />

                        </div>


                        {/* AMOUNT */}

                        <h2 className="mt-6 text-3xl font-bold text-green-600">
                            ₹{totalAmount.toFixed(2)}
                        </h2>


                        <p className="mt-3 text-gray-500">
                            Pay using Google Pay, PhonePe,
                            Paytm or any UPI app
                        </p>


                        {/* UPI ID */}

                        <p className="mt-4 rounded-lg bg-gray-100 px-5 py-2 font-semibold">
                            UPI: {UPI_ID}
                        </p>


                        {/* PAYMENT BUTTON */}

                        <a
                            href={upiUrl}
                            className="mt-6 w-full rounded-lg bg-blue-600 py-3 text-center font-bold text-white hover:bg-blue-700"
                        >
                            📱 Pay Now
                        </a>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default Checkout;