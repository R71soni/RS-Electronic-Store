const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* =========================================
                HERO SECTION
            ========================================= */}

            <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-20 text-white">

                <div className="mx-auto max-w-7xl px-6 text-center">

                    <h1 className="text-5xl font-bold md:text-6xl">
                        Contact RS Electronic
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
                        Need help with your order, product, delivery, or
                        return? Our support team is here to help you.
                    </p>

                </div>

            </section>


            {/* =========================================
                CONTACT SECTION
            ========================================= */}

            <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">


                {/* =========================================
                    CONTACT INFORMATION
                ========================================= */}

                <div>

                    <span className="font-semibold uppercase tracking-wider text-blue-600">
                        Get In Touch
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-gray-800">
                        We're Here To Help
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        Have questions about our electronic products or need
                        assistance with your order? Contact our customer
                        support team and we'll be happy to help you.
                    </p>


                    <div className="mt-8 space-y-5">


                        {/* ADDRESS */}

                        <div className="flex items-center gap-5 rounded-xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">

                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-3xl">
                                📍
                            </div>

                            <div>

                                <h3 className="text-xl font-bold text-gray-800">
                                    Our Location
                                </h3>

                                <p className="mt-1 text-gray-600">
                                    Gurugram, Haryana, India
                                </p>

                            </div>

                        </div>


                        {/* EMAIL */}

                        <div className="flex items-center gap-5 rounded-xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">

                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-3xl">
                                📧
                            </div>

                            <div>

                                <h3 className="text-xl font-bold text-gray-800">
                                    Email Support
                                </h3>

                                <p className="mt-1 text-gray-600">
                                    support@rselectronic.com
                                </p>

                            </div>

                        </div>


                        {/* PHONE */}

                        <div className="flex items-center gap-5 rounded-xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">

                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-3xl">
                                📞
                            </div>

                            <div>

                                <h3 className="text-xl font-bold text-gray-800">
                                    Customer Support
                                </h3>

                                <p className="mt-1 text-gray-600">
                                    +91 98181 62941
                                </p>

                            </div>

                        </div>


                        {/* SUPPORT TIME */}

                        <div className="flex items-center gap-5 rounded-xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">

                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-3xl">
                                🕐
                            </div>

                            <div>

                                <h3 className="text-xl font-bold text-gray-800">
                                    Support Hours
                                </h3>

                                <p className="mt-1 text-gray-600">
                                    Monday - Saturday | 9:00 AM - 6:00 PM
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =========================================
                    CONTACT FORM
                ========================================= */}

                <div className="rounded-2xl bg-white p-8 shadow-xl md:p-10">

                    <h2 className="text-center text-3xl font-bold text-gray-800">
                        Send Us a Message
                    </h2>

                    <p className="mt-3 text-center text-gray-500">
                        Fill out the form and our team will get back to you.
                    </p>


                    <form className="mt-8 space-y-5">


                        {/* FULL NAME */}

                        <div>

                            <label className="mb-2 block font-semibold text-gray-700">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />

                        </div>


                        {/* EMAIL */}

                        <div>

                            <label className="mb-2 block font-semibold text-gray-700">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />

                        </div>


                        {/* ORDER ID */}

                        <div>

                            <label className="mb-2 block font-semibold text-gray-700">
                                Order ID
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your order ID (Optional)"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />

                        </div>


                        {/* SUBJECT */}

                        <div>

                            <label className="mb-2 block font-semibold text-gray-700">
                                Select Issue
                            </label>

                            <select
                                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            >

                                <option>
                                    Select an issue
                                </option>

                                <option>
                                    Product Information
                                </option>

                                <option>
                                    Order Status
                                </option>

                                <option>
                                    Delivery Issue
                                </option>

                                <option>
                                    Return & Refund
                                </option>

                                <option>
                                    Payment Issue
                                </option>

                                <option>
                                    Other
                                </option>

                            </select>

                        </div>


                        {/* MESSAGE */}

                        <div>

                            <label className="mb-2 block font-semibold text-gray-700">
                                Message
                            </label>

                            <textarea
                                rows={5}
                                placeholder="Describe your issue or question..."
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            ></textarea>

                        </div>


                        {/* SUBMIT BUTTON */}

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
                        >
                            Send Message 📩
                        </button>

                    </form>

                </div>

            </section>


            {/* =========================================
                QUICK SUPPORT
            ========================================= */}

            <section className="bg-white py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <h2 className="text-center text-4xl font-bold text-gray-800">
                        How Can We Help You?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
                        Choose the type of support you need.
                    </p>


                    <div className="mt-12 grid gap-8 md:grid-cols-3">


                        {/* ORDER HELP */}

                        <div className="rounded-2xl bg-gray-50 p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">

                            <div className="text-5xl">
                                📦
                            </div>

                            <h3 className="mt-5 text-2xl font-bold">
                                Order Support
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Need help tracking your order or checking
                                your delivery status?
                            </p>

                        </div>


                        {/* RETURNS */}

                        <div className="rounded-2xl bg-gray-50 p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">

                            <div className="text-5xl">
                                🔄
                            </div>

                            <h3 className="mt-5 text-2xl font-bold">
                                Returns & Refunds
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Contact us for product returns, exchanges,
                                and refund-related queries.
                            </p>

                        </div>


                        {/* PRODUCT HELP */}

                        <div className="rounded-2xl bg-gray-50 p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">

                            <div className="text-5xl">
                                💻
                            </div>

                            <h3 className="mt-5 text-2xl font-bold">
                                Product Assistance
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Get help choosing the right electronic
                                product for your needs.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                LOCATION / MAP
            ========================================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8">

                    <h2 className="text-center text-4xl font-bold text-gray-800">
                        Find Us Here
                    </h2>

                    <p className="mt-3 text-center text-gray-500">
                        Visit our location in Gurugram, Haryana.
                    </p>


                    <div className="mt-8 overflow-hidden rounded-2xl">

                        <iframe
                            title="RS Electronic Location"
                            width="100%"
                            height="500"
                            style={{
                                border: 0,
                            }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://maps.google.com/maps?q=28.4815155,77.0299887&z=17&output=embed"
                        ></iframe>

                    </div>

                </div>

            </section>


            {/* =========================================
                CTA
            ========================================= */}

            <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-center text-white">

                <div className="mx-auto max-w-3xl px-6">

                    <h2 className="text-4xl font-bold">
                        Need Help With Your Purchase?
                    </h2>

                    <p className="mt-4 text-lg text-blue-100">
                        Our customer support team is ready to assist you.
                        Contact us today!
                    </p>

                    <a
                        href="mailto:support@rselectronic.com"
                        className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
                    >
                        Email Us 📧
                    </a>

                </div>

            </section>

        </div>
    );
};

export default Contact;