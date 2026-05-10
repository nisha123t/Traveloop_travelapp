import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    additionalInfo: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.username ||
      !formData.password ||
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.country
    ) {
      setError("Please fill all required fields");
      return;
    }

    setError("");

    alert("User Registered Successfully!");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <div className="flex justify-between items-center px-8 py-5 border-b border-red-900">

        <h1 className="text-3xl font-bold text-red-700">
          Traveloop
        </h1>

        <button className="bg-red-800 hover:bg-red-900 px-5 py-2 rounded-lg transition">
          Login
        </button>

      </div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto py-12 px-6">

        <div className="bg-[#111111] rounded-2xl shadow-2xl p-10 border border-red-900">

          <h2 className="text-4xl font-bold mb-10 text-center text-red-700">
            Register User
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Photo Upload */}
            <div>
              <label className="block mb-2 font-semibold">
                Profile Photo (Optional)
              </label>

              <input
                type="file"
                className="w-full bg-black border border-gray-700 rounded-xl p-3"
              />
            </div>

            {/* First + Last Name */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-semibold">
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-xl p-4 outline-none focus:border-red-700"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-xl p-4 outline-none focus:border-red-700"
                />
              </div>

            </div>

            {/* Username */}
            <div>
              <label className="block mb-2 font-semibold">
                Username
              </label>

              <input
                type="text"
                name="username"
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 rounded-xl p-4 outline-none focus:border-red-700"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-semibold">
                Password
              </label>

              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 rounded-xl p-4 outline-none focus:border-red-700"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 rounded-xl p-4 outline-none focus:border-red-700"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 font-semibold">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 rounded-xl p-4 outline-none focus:border-red-700"
              />
            </div>

            {/* City + Country */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-semibold">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-xl p-4 outline-none focus:border-red-700"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Country
                </label>

                <input
                  type="text"
                  name="country"
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-xl p-4 outline-none focus:border-red-700"
                />
              </div>

            </div>

            {/* Additional Info */}
            <div>
              <label className="block mb-2 font-semibold">
                Additional Information (Optional)
              </label>

              <textarea
                rows="4"
                name="additionalInfo"
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 rounded-xl p-4 outline-none focus:border-red-700"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-900 text-white p-4 rounded-xl">
                {error}
              </div>
            )}

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-red-800 hover:bg-red-900 text-white py-4 rounded-xl text-lg font-semibold transition"
            >
              Register User
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Register;