import { Route, Routes } from "react-router-dom";

import Login from "./Components/auth/Login";
import Signup from "./Components/auth/Signup";

import Landingpage from "./Landingpage";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Course from "./pages/Courses/Course";
import Home from "./pages/Home";
import Search from "./pages/Search";


// Product Details
import ProductDetails from "./Components/ProductDetails";


// Cart
import Cart from "./pages/Cart";


// Checkout
import Checkout from "./pages/Checkout";


const App = () => {

  return (

    <Routes>


      {/* MAIN LAYOUT */}

      <Route
        path="/"
        element={<Landingpage />}
      >


        {/* HOME */}

        <Route
          index
          element={<Home />}
        />


        <Route
          path="home"
          element={<Home />}
        />



        {/* PRODUCTS */}

        <Route
          path="course"
          element={<Course />}
        />



        {/* PRODUCT DETAILS */}

        <Route
          path="product/:id"
          element={<ProductDetails />}
        />



        {/* CART */}

        <Route
          path="cart"
          element={<Cart />}
        />



        {/* CHECKOUT */}

        <Route
          path="checkout"
          element={<Checkout />}
        />



        {/* AUTH */}

        <Route
          path="login"
          element={<Login />}
        />


        <Route
          path="signup"
          element={<Signup />}
        />



        {/* OTHER PAGES */}

        <Route
          path="about"
          element={<About />}
        />


        <Route
          path="contact"
          element={<Contact />}
        />



        {/* AI SEARCH */}

        <Route
          path="search"
          element={<Search />}
        />


      </Route>


    </Routes>

  );

};


export default App;