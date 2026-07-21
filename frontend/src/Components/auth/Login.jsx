import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL =
    import.meta.env.VITE_API_URL || "https://rs-electronic-store.onrender.com";

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("API URL:", API_URL);

            const response = await fetch(`${API_URL}/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Login Failed");
                return;
            }

            localStorage.setItem("user", JSON.stringify(data.user));

            window.dispatchEvent(new Event("userLogin"));

            alert(data.message);

            navigate("/");
        } catch (error) {
            console.error("Login Error:", error);
            alert("Unable to connect to the server.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold">
                        Welcome Back 👋
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Login to continue your learning journey.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                        <label className="block mb-1">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border rounded-lg"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border rounded-lg"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center mt-6">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-600">
                        Sign Up
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Login;