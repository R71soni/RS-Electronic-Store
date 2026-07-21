import { Link } from "react-router-dom";

const Home = () => {

  const categories = [
    {
      id: 1,
      name: "Smartphones",
      icon: "📱",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    },
    {
      id: 2,
      name: "Laptops",
      icon: "💻",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
    },
    {
      id: 3,
      name: "Headphones",
      icon: "🎧",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    },
    {
      id: 4,
      name: "Smart Watches",
      icon: "⌚",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    },
  ];


  const products = [
    {
      id: 1,
      name: "Premium Smartphone",
      price: "$699",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    },
    {
      id: 2,
      name: "Gaming Laptop",
      price: "$1299",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: "$199",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: "$249",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    },
  ];


  return (

    <div className="bg-gray-50">

      {/* ================================
          HERO SECTION
      ================================= */}

      <section className="bg-linear-to-r from-blue-700 via-blue-600 to-purple-700 text-white">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">

          {/* Hero Content */}

          <div>

            <p className="mb-4 text-lg font-semibold text-blue-200">
              Welcome to RS Electronic
            </p>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">

              Upgrade Your
              <br />

              Digital Lifestyle 🚀

            </h1>

            <p className="mt-6 max-w-xl text-lg text-blue-100">

              Discover the latest smartphones, laptops, headphones,
              smart watches and other premium electronic products
              at the best prices.

            </p>


            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/course"
                className="rounded-lg bg-white px-7 py-3 font-bold text-blue-600 transition hover:bg-gray-100"
              >
                Shop Now 🛒
              </Link>


              <Link
                to="/about"
                className="rounded-lg border border-white px-7 py-3 font-bold transition hover:bg-white hover:text-blue-600"
              >
                Explore More
              </Link>

            </div>

          </div>


          {/* Hero Image */}

          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=900"
              alt="Electronic Products"
              className="w-full rounded-2xl object-cover shadow-2xl"
            />

          </div>

        </div>

      </section>


      {/* ================================
          FEATURES
      ================================= */}

      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

          <div className="rounded-xl bg-white p-6 text-center shadow-md">

            <div className="text-4xl">
              🚚
            </div>

            <h3 className="mt-3 text-lg font-bold">
              Fast Delivery
            </h3>

            <p className="mt-2 text-gray-500">
              Quick and secure delivery
            </p>

          </div>


          <div className="rounded-xl bg-white p-6 text-center shadow-md">

            <div className="text-4xl">
              🔒
            </div>

            <h3 className="mt-3 text-lg font-bold">
              Secure Payment
            </h3>

            <p className="mt-2 text-gray-500">
              100% secure payment
            </p>

          </div>


          <div className="rounded-xl bg-white p-6 text-center shadow-md">

            <div className="text-4xl">
              💯
            </div>

            <h3 className="mt-3 text-lg font-bold">
              Quality Products
            </h3>

            <p className="mt-2 text-gray-500">
              Genuine premium products
            </p>

          </div>


          <div className="rounded-xl bg-white p-6 text-center shadow-md">

            <div className="text-4xl">
              🔄
            </div>

            <h3 className="mt-3 text-lg font-bold">
              Easy Returns
            </h3>

            <p className="mt-2 text-gray-500">
              Simple return policy
            </p>

          </div>

        </div>

      </section>


      {/* ================================
          CATEGORIES
      ================================= */}

      <section className="mx-auto max-w-7xl px-6 py-12">

        <h2 className="text-center text-4xl font-bold text-gray-800">
          Shop By Category
        </h2>

        <p className="mt-3 text-center text-gray-500">
          Explore our latest electronic collections
        </p>


        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (

            <Link
              to="/course"
              key={category.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="h-56 overflow-hidden">

                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>


              <div className="p-5 text-center">

                <div className="text-4xl">
                  {category.icon}
                </div>

                <h3 className="mt-3 text-xl font-bold">
                  {category.name}
                </h3>

                <p className="mt-2 font-semibold text-blue-600">
                  Shop Now →
                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* ================================
          BANNER
      ================================= */}

      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="overflow-hidden rounded-2xl bg-linear-to-r from-purple-600 to-blue-600">

          <div className="grid items-center gap-8 px-8 py-12 text-white md:grid-cols-2 md:px-16">

            <div>

              <p className="font-semibold text-purple-200">
                SPECIAL OFFER
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Get Up To 50% Off
              </h2>

              <p className="mt-4 text-lg text-purple-100">
                Grab amazing deals on selected electronic products.
              </p>

              <Link
                to="/course"
                className="mt-6 inline-block rounded-lg bg-white px-7 py-3 font-bold text-purple-600 hover:bg-gray-100"
              >
                Shop Deals
              </Link>

            </div>


            <div className="flex justify-center">

              <span className="text-9xl">
                🛒
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ================================
          FEATURED PRODUCTS
      ================================= */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        <h2 className="text-center text-4xl font-bold">
          Featured Products
        </h2>

        <p className="mt-3 text-center text-gray-500">
          Check out our most popular electronics
        </p>


        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (

            <div
              key={product.id}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Product Image */}

              <div className="h-64 bg-gray-100">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />

              </div>


              {/* Product Details */}

              <div className="p-5">

                <div className="text-yellow-500">
                  ⭐⭐⭐⭐⭐
                </div>

                <h3 className="mt-3 text-xl font-bold">
                  {product.name}
                </h3>

                <p className="mt-3 text-2xl font-bold text-green-600">
                  {product.price}
                </p>


                <Link
                  to={`/product/${product.id}`}
                  className="mt-5 block w-full rounded-lg bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  View Product
                </Link>

              </div>

            </div>

          ))}

        </div>


        {/* View All */}

        <div className="mt-10 text-center">

          <Link
            to="/course"
            className="inline-block rounded-lg bg-gray-800 px-8 py-3 font-semibold text-white hover:bg-gray-900"
          >
            View All Products →
          </Link>

        </div>

      </section>


      {/* ================================
          NEWSLETTER
      ================================= */}

      <section className="bg-gray-900 px-6 py-16 text-white">

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Stay Updated With RS Electronic
          </h2>

          <p className="mt-4 text-gray-400">
            Subscribe to get the latest products, offers and exclusive deals.
          </p>


          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg px-5 py-3 text-gray-800 outline-none"
            />

            <button
              className="rounded-lg bg-blue-600 px-7 py-3 font-semibold hover:bg-blue-700"
            >
              Subscribe
            </button>

          </div>

        </div>

      </section>

    </div>

  );
};

export default Home;