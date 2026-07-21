import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();


    // =================================
    // FORM DATA
    // =================================

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });


    // =================================
    // PHOTO STATE
    // =================================

    const [photo, setPhoto] = useState(null);


    // =================================
    // PHOTO PREVIEW
    // =================================

    const [preview, setPreview] = useState(null);


    // =================================
    // HANDLE INPUT CHANGE
    // =================================

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };


    // =================================
    // HANDLE PHOTO CHANGE
    // =================================

    const handlePhotoChange = (e) => {

        const selectedPhoto = e.target.files[0];

        if (selectedPhoto) {

            // Save photo
            setPhoto(selectedPhoto);


            // Create preview
            const imageUrl =
                URL.createObjectURL(selectedPhoto);

            setPreview(imageUrl);

        }

    };


    // =================================
    // HANDLE SUBMIT
    // =================================

    const handleSubmit = async (e) => {

        e.preventDefault();


        // Check password
        if (
            formData.password !==
            formData.confirmPassword
        ) {

            alert("Passwords do not match");

            return;

        }


        try {

            // =================================
            // CREATE FORMDATA
            // =================================

            const data = new FormData();


            // Add text data
            data.append(
                "name",
                formData.name
            );

            data.append(
                "email",
                formData.email
            );

            data.append(
                "password",
                formData.password
            );


            // Add photo
            if (photo) {

                data.append(
                    "photo",
                    photo
                );

            }


            // =================================
            // API REQUEST
            // =================================

            const response = await fetch(
                "http://localhost:5000/api/signup",
                {
                    method: "POST",

                    // IMPORTANT:
                    // Content-Type mat lagao
                    // Browser automatically set karega

                    body: data,
                }
            );


            const result = await response.json();


            // Show message
            alert(result.message);


            // =================================
            // SUCCESS
            // =================================

            if (response.ok) {

                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });


                // Remove photo
                setPhoto(null);


                // Remove preview
                setPreview(null);


                // Login page par redirect
                navigate("/login");

            }

        } catch (error) {

            console.error(
                "Signup Error:",
                error
            );

            alert("Server Error");

        }

    };


    return (

        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-500 to-purple-600 p-6">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">


                {/* =================================
                    HEADING
                ================================= */}

                <h1 className="text-3xl font-bold text-center text-gray-800">
                    Create Account
                </h1>

                <p className="text-center text-gray-500 mt-2 mb-6">
                    Sign up to continue learning
                </p>


                {/* =================================
                    FORM
                ================================= */}

                <form
                    className="space-y-5"
                    onSubmit={handleSubmit}
                >


                    {/* =================================
                        PHOTO UPLOAD
                    ================================= */}

                    <div className="flex flex-col items-center">

                        {/* Photo Preview */}

                        {preview ? (

                            <img
                                src={preview}
                                alt="Profile Preview"
                                className="h-24 w-24 rounded-full object-cover border-4 border-blue-500 mb-4"
                            />

                        ) : (

                            <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">

                                <span className="text-gray-500 text-sm">
                                    No Photo
                                </span>

                            </div>

                        )}


                        {/* Upload Button */}

                        <label
                            htmlFor="photo"
                            className="cursor-pointer rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
                        >
                            Choose Photo
                        </label>


                        {/* Hidden File Input */}

                        <input
                            id="photo"
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            className="hidden"
                        />


                        {/* Selected File Name */}

                        {photo && (

                            <p className="mt-2 text-sm text-gray-500">

                                {photo.name}

                            </p>

                        )}

                    </div>


                    {/* =================================
                        NAME
                    ================================= */}

                    <div>

                        <label className="block mb-2 font-medium">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>


                    {/* =================================
                        EMAIL
                    ================================= */}

                    <div>

                        <label className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>


                    {/* =================================
                        PASSWORD
                    ================================= */}

                    <div>

                        <label className="block mb-2 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>


                    {/* =================================
                        CONFIRM PASSWORD
                    ================================= */}

                    <div>

                        <label className="block mb-2 font-medium">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>


                    {/* =================================
                        SIGNUP BUTTON
                    ================================= */}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </button>

                </form>


                {/* =================================
                    LOGIN LINK
                ================================= */}

                <p className="text-center mt-6">

                    Already have an account?{" "}

                    <Link
                        to="/login"
                        className="text-blue-600 font-semibold"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>

    );

};

export default Signup;