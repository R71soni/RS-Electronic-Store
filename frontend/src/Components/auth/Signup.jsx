import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "https://rs-electronic-store.onrender.com";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const signupData = new FormData();

      signupData.append("name", formData.name);
      signupData.append("email", formData.email);
      signupData.append("password", formData.password);

      if (photo) {
        signupData.append("photo", photo);
      }

      const response = await fetch(`${API_URL}/api/signup`, {
        method: "POST",
        body: signupData,
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message);
        return;
      }

      alert(result.message);

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setPhoto(null);
      setPreview(null);

      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Sign up to continue shopping
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="flex flex-col items-center">

            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 mb-4"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                No Photo
              </div>
            )}

            <label
              htmlFor="photo"
              className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
            >
              Choose Photo
            </label>

            <input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />

            {photo && (
              <p className="mt-2 text-sm text-gray-500">
                {photo.name}
              </p>
            )}
          </div>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border rounded-lg p-3"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border rounded-lg p-3"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </button>

        </form>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;