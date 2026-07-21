const About = () => {
    return (
        <div className="bg-gray-50">

            {/* =========================================
                HERO SECTION
            ========================================= */}

            <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-20 text-white">

                <div className="mx-auto max-w-7xl px-6 text-center">

                    <h1 className="text-5xl font-bold md:text-6xl">
                        About RS Electronic
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                        Welcome to RS Electronic, your trusted destination for
                        quality electronics and smart technology products.
                        We make modern technology simple, accessible, and
                        affordable for everyone.
                    </p>

                </div>

            </section>


            {/* =========================================
                WHO WE ARE
            ========================================= */}

            <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

                {/* IMAGE */}

                <div>

                    <img
                        src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=900"
                        alt="Electronic Products"
                        className="h-[450px] w-full rounded-2xl object-cover shadow-2xl"
                    />

                </div>


                {/* CONTENT */}

                <div>

                    <span className="font-semibold uppercase tracking-wider text-blue-600">
                        Who We Are
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-gray-800">
                        Your Smart Technology Store
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        RS Electronic is an online electronics store dedicated
                        to providing customers with reliable, modern, and
                        affordable technology products.
                    </p>

                    <p className="mt-4 leading-8 text-gray-600">
                        From smartphones and laptops to headphones, smart
                        devices, and other electronic accessories, we bring
                        useful technology together in one convenient place.
                    </p>

                    <p className="mt-4 leading-8 text-gray-600">
                        Our goal is to provide a smooth shopping experience,
                        quality products, secure payments, and excellent
                        customer service.
                    </p>


                    {/* BUTTON */}

                    <button
                        onClick={() =>
                            window.location.href = "/course"
                        }
                        className="mt-8 rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Explore Products
                    </button>

                </div>

            </section>


            {/* =========================================
                OUR MISSION & VISION
            ========================================= */}

            <section className="bg-white py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <h2 className="text-center text-4xl font-bold text-gray-800">
                        Our Mission & Vision
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
                        We are committed to making technology shopping
                        easier, safer, and more convenient.
                    </p>


                    <div className="mt-12 grid gap-8 md:grid-cols-2">


                        {/* MISSION */}

                        <div className="rounded-2xl bg-blue-50 p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl">

                            <div className="text-5xl">
                                🎯
                            </div>

                            <h3 className="mt-5 text-2xl font-bold text-gray-800">
                                Our Mission
                            </h3>

                            <p className="mt-4 leading-7 text-gray-600">
                                Our mission is to provide customers with
                                high-quality electronics at competitive prices
                                while delivering a simple and enjoyable
                                online shopping experience.
                            </p>

                        </div>


                        {/* VISION */}

                        <div className="rounded-2xl bg-purple-50 p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl">

                            <div className="text-5xl">
                                🚀
                            </div>

                            <h3 className="mt-5 text-2xl font-bold text-gray-800">
                                Our Vision
                            </h3>

                            <p className="mt-4 leading-7 text-gray-600">
                                Our vision is to become a trusted online
                                electronics marketplace where customers can
                                easily discover and purchase the latest
                                technology products.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                WHY CHOOSE US
            ========================================= */}

            <section className="bg-gray-100 py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <h2 className="text-center text-4xl font-bold text-gray-800">
                        Why Choose RS Electronic?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
                        We focus on providing value, convenience, and trust
                        to every customer.
                    </p>


                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">


                        {/* QUALITY */}

                        <div className="rounded-2xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2">

                            <div className="text-5xl">
                                📱
                            </div>

                            <h3 className="mt-5 text-xl font-bold">
                                Quality Products
                            </h3>

                            <p className="mt-3 text-gray-500">
                                Discover reliable and modern electronic
                                products for your everyday needs.
                            </p>

                        </div>


                        {/* PRICE */}

                        <div className="rounded-2xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2">

                            <div className="text-5xl">
                                💰
                            </div>

                            <h3 className="mt-5 text-xl font-bold">
                                Best Prices
                            </h3>

                            <p className="mt-3 text-gray-500">
                                Get great technology products at competitive
                                and affordable prices.
                            </p>

                        </div>


                        {/* DELIVERY */}

                        <div className="rounded-2xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2">

                            <div className="text-5xl">
                                🚚
                            </div>

                            <h3 className="mt-5 text-xl font-bold">
                                Fast Delivery
                            </h3>

                            <p className="mt-3 text-gray-500">
                                We aim to make your shopping experience
                                convenient with fast delivery.
                            </p>

                        </div>


                        {/* SUPPORT */}

                        <div className="rounded-2xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2">

                            <div className="text-5xl">
                                🛡️
                            </div>

                            <h3 className="mt-5 text-xl font-bold">
                                Trusted Service
                            </h3>

                            <p className="mt-3 text-gray-500">
                                Customer satisfaction and secure shopping
                                are always our priorities.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                PRODUCT CATEGORIES
            ========================================= */}

            <section className="bg-white py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <h2 className="text-center text-4xl font-bold text-gray-800">
                        What We Offer
                    </h2>


                    <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">


                        <div className="rounded-xl border bg-gray-50 p-8 text-center transition hover:border-blue-500 hover:shadow-lg">

                            <div className="text-5xl">
                                💻
                            </div>

                            <h3 className="mt-4 text-xl font-bold">
                                Laptops
                            </h3>

                        </div>


                        <div className="rounded-xl border bg-gray-50 p-8 text-center transition hover:border-blue-500 hover:shadow-lg">

                            <div className="text-5xl">
                                📱
                            </div>

                            <h3 className="mt-4 text-xl font-bold">
                                Smartphones
                            </h3>

                        </div>


                        <div className="rounded-xl border bg-gray-50 p-8 text-center transition hover:border-blue-500 hover:shadow-lg">

                            <div className="text-5xl">
                                🎧
                            </div>

                            <h3 className="mt-4 text-xl font-bold">
                                Accessories
                            </h3>

                        </div>


                        <div className="rounded-xl border bg-gray-50 p-8 text-center transition hover:border-blue-500 hover:shadow-lg">

                            <div className="text-5xl">
                                ⌚
                            </div>

                            <h3 className="mt-4 text-xl font-bold">
                                Smart Devices
                            </h3>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                STATISTICS
            ========================================= */}

            <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">


                        <div>

                            <h2 className="text-5xl font-bold">
                                10K+
                            </h2>

                            <p className="mt-3 text-blue-100">
                                Happy Customers
                            </p>

                        </div>


                        <div>

                            <h2 className="text-5xl font-bold">
                                500+
                            </h2>

                            <p className="mt-3 text-blue-100">
                                Products
                            </p>

                        </div>


                        <div>

                            <h2 className="text-5xl font-bold">
                                50+
                            </h2>

                            <p className="mt-3 text-blue-100">
                                Brands
                            </p>

                        </div>


                        <div>

                            <h2 className="text-5xl font-bold">
                                24/7
                            </h2>

                            <p className="mt-3 text-blue-100">
                                Customer Support
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                CALL TO ACTION
            ========================================= */}

            <section className="py-20">

                <div className="mx-auto max-w-4xl px-6 text-center">

                    <h2 className="text-4xl font-bold text-gray-800">
                        Ready to Upgrade Your Technology?
                    </h2>

                    <p className="mt-5 text-lg text-gray-600">
                        Explore our collection of electronic products and
                        find the perfect technology for your needs.
                    </p>

                    <button
                        onClick={() =>
                            window.location.href = "/course"
                        }
                        className="mt-8 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
                    >
                        Shop Now 🛒
                    </button>

                </div>

            </section>

        </div>
    );
};

export default About;