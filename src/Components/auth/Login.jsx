import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle login
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                "http://localhost:5000/api/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            alert(data.message);

            // Login successful
            if (response.ok) {

                // Save logged-in user
                localStorage.setItem(
                    "user",
                    JSON.stringify(data.user)
                );

                // Notify Navbar that user has logged in
                window.dispatchEvent(
                    new Event("userLogin")
                );

                console.log("Logged in User:", data.user);

                // Redirect to Home
                navigate("/");
            }

        } catch (error) {

            console.error("Login Error:", error);

            alert("Server Error");

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-500 to-purple-600 px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

                {/* Heading */}
                <div className="text-center mb-8">

                    <h1 className="text-3xl font-bold">
                        Welcome Back 👋
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Login to continue your learning journey.
                    </p>

                </div>


                {/* Login Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    {/* Email */}
                    <div>

                        <label
                            htmlFor="email"
                            className="block mb-1"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border rounded-lg"
                            required
                        />

                    </div>


                    {/* Password */}
                    <div>

                        <label
                            htmlFor="password"
                            className="block mb-1"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border rounded-lg"
                            required
                        />

                    </div>


                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                    >
                        Login
                    </button>

                </form>


                {/* Signup Link */}
                <p className="text-center mt-6">

                    Don't have an account?{" "}

                    <Link
                        to="/signup"
                        className="text-blue-600"
                    >
                        Sign Up
                    </Link>

                </p>

            </div>

        </div>
    );
};

export default Login;