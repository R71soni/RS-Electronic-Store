import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/mainLogoD.png";

const Navbar = () => {

  const navigate = useNavigate();

  // ================================
  // USER STATE
  // ================================

  const [user, setUser] = useState(() => {

    try {

      const savedUser =
        localStorage.getItem("user");

      return savedUser
        ? JSON.parse(savedUser)
        : null;

    } catch (error) {

      console.error(
        "User data error:",
        error
      );

      localStorage.removeItem("user");

      return null;
    }
  });


  // ================================
  // PROFILE DROPDOWN
  // ================================

  const [showProfile, setShowProfile] =
    useState(false);


  // ================================
  // CART COUNT
  // ================================

  const [cartCount, setCartCount] =
    useState(0);


  // ================================
  // USER PHOTO
  // ================================

  const getPhotoUrl = (photo) => {

    if (!photo) {
      return "https://via.placeholder.com/80";
    }

    if (
      photo.startsWith("http://") ||
      photo.startsWith("https://")
    ) {
      return photo;
    }

    return `http://localhost:5000${photo}`;
  };


  // ================================
  // UPDATE CART COUNT
  // ================================

  const updateCartCount = () => {

    try {

      const savedCart =
        JSON.parse(
          localStorage.getItem("cart")
        ) || [];


      // Number of products in cart
      setCartCount(savedCart.length);

    } catch (error) {

      console.error(
        "Cart data error:",
        error
      );

      setCartCount(0);
    }
  };


  // ================================
  // EVENTS
  // ================================

  useEffect(() => {

    // Refresh / First Load
    updateCartCount();


    // Login Event
    const handleLogin = () => {

      const savedUser =
        localStorage.getItem("user");

      if (savedUser) {

        try {

          setUser(
            JSON.parse(savedUser)
          );

        } catch (error) {

          console.error(error);

        }
      }
    };


    // Logout Event
    const handleLogoutEvent = () => {

      setUser(null);

      setShowProfile(false);
    };


    // Cart Update Event
    const handleCartUpdate = () => {

      updateCartCount();
    };


    window.addEventListener(
      "userLogin",
      handleLogin
    );

    window.addEventListener(
      "userLogout",
      handleLogoutEvent
    );

    window.addEventListener(
      "cartUpdated",
      handleCartUpdate
    );


    // Cleanup
    return () => {

      window.removeEventListener(
        "userLogin",
        handleLogin
      );

      window.removeEventListener(
        "userLogout",
        handleLogoutEvent
      );

      window.removeEventListener(
        "cartUpdated",
        handleCartUpdate
      );
    };

  }, []);


  // ================================
  // PROTECTED NAVIGATION
  // ================================

  const handleProtectedLink = (path) => {

    if (user) {

      navigate(path);

    } else {

      alert(
        "Please login first!"
      );

      navigate("/login");
    }
  };


  // ================================
  // LOGOUT
  // ================================

  const handleLogout = () => {

    localStorage.removeItem("user");

    setUser(null);

    setShowProfile(false);

    window.dispatchEvent(
      new Event("userLogout")
    );

    navigate("/login");
  };


  return (

    <nav className="sticky top-0 z-50 bg-white shadow-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


        {/* ================================
                    LOGO
                ================================= */}

        <Link
          to="/home"
          className="flex items-center gap-3"
        >

          <img
            src={logo}
            alt="RS Electronic"
            className="h-12 w-12 rounded-xl object-cover"
          />

          <div>

            <h1 className="text-2xl font-bold text-blue-600">
              RS Electronic
            </h1>

            <p className="text-xs font-medium text-gray-500">
              Smart Technology Store
            </p>

          </div>

        </Link>


        {/* ================================
                    NAVIGATION
                ================================= */}

        <ul className="hidden gap-8 text-lg font-medium text-gray-700 md:flex">

          <li>
            <button
              onClick={() =>
                handleProtectedLink("/home")
              }
              className="transition hover:text-blue-600"
            >
              Home
            </button>
          </li>


          <li>
            <button
              onClick={() =>
                handleProtectedLink("/course")
              }
              className="transition hover:text-blue-600"
            >
              Products
            </button>
          </li>


          <li>
            <button
              onClick={() =>
                handleProtectedLink("/about")
              }
              className="transition hover:text-blue-600"
            >
              About
            </button>
          </li>


          <li>
            <button
              onClick={() =>
                handleProtectedLink("/contact")
              }
              className="transition hover:text-blue-600"
            >
              Contact
            </button>
          </li>

        </ul>


        {/* ================================
                    RIGHT SECTION
                ================================= */}

        <div className="flex items-center gap-5">


          {/* AI */}

          <button
            onClick={() =>
              handleProtectedLink("/search")
            }
            className="text-2xl text-gray-700 hover:text-blue-600"
            title="AI Assistant"
          >
            <RiRobot2Line />
          </button>


          {/* ================================
                        CART
                    ================================= */}

          <button
            onClick={() =>
              handleProtectedLink("/cart")
            }
            className="relative text-2xl text-gray-700 hover:text-blue-600"
            title="Shopping Cart"
          >

            <FaShoppingCart />


            {/* CART BADGE */}

            {cartCount > 0 && (

              <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">

                {cartCount}

              </span>

            )}

          </button>


          {/* ================================
                        USER
                    ================================= */}

          {user ? (

            <div className="relative">


              {/* USER PHOTO */}

              <button
                onClick={() =>
                  setShowProfile(
                    !showProfile
                  )
                }
                className="focus:outline-none"
              >

                <img
                  src={getPhotoUrl(
                    user.photo
                  )}
                  alt={
                    user.name ||
                    "User"
                  }
                  className="h-11 w-11 rounded-full border-2 border-blue-500 object-cover"
                />

              </button>


              {/* PROFILE */}

              {showProfile && (

                <div className="absolute right-0 top-14 z-50 w-64 rounded-xl border bg-white p-4 shadow-xl">

                  <div className="flex flex-col items-center">

                    <img
                      src={getPhotoUrl(
                        user.photo
                      )}
                      alt={
                        user.name ||
                        "User"
                      }
                      className="h-20 w-20 rounded-full border-2 border-blue-500 object-cover"
                    />

                    <h3 className="mt-3 text-lg font-bold">
                      {user.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {user.email}
                    </p>

                  </div>


                  <hr className="my-4" />


                  {/* VIEW CART */}

                  <button
                    onClick={() => {

                      setShowProfile(false);

                      navigate("/cart");

                    }}
                    className="mb-2 w-full rounded-lg border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    🛒 View Cart
                  </button>


                  {/* LOGOUT */}

                  <button
                    onClick={handleLogout}
                    className="w-full rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  >
                    rakesh
                  </button>

                </div>

              )}

            </div>

          ) : (

            <div className="flex gap-3">

              <Link
                to="/login"
                className="rounded-lg border border-blue-600 px-5 py-2 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
              >
              jjjjjjjjjj
              </Link>

            </div>

          )}

        </div>

      </div>

    </nav>

  );
};

export default Navbar;