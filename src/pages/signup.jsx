import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope, FaSeedling, FaUsers, FaTractor } from "react-icons/fa";

export default function Signup({ setIsAuthenticated }) {
  const [accountType, setAccountType] = useState("consumer");
  const [formData, setFormData] = useState({
    fullName: "",
    farmName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();


    if (!formData.fullName || !formData.email || !formData.password) {
      alert("Please fill in all required fields");
      return;
    }

    if (accountType === "farmer" && !formData.farmName) {
      alert("Please enter your farm name");
      return;
    }

    const payload =
      accountType === "consumer"
        ? {
            type: "consumer",
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
          }
        : {
            type: "farmer",
            fullName: formData.fullName,
            farmName: formData.farmName,
            email: formData.email,
            password: formData.password,
          };

    console.log("SEND TO BACKEND API ", payload);
    
    setIsAuthenticated(true);
    navigate('/dashboard');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4FFF7] px-6">
      <div className="w-[90%] md:w-[85%] lg:w-[75%] flex flex-col lg:flex-row shadow-lg rounded-xl overflow-hidden bg-white">

        {/*  LEFT SIDE (same as LOGIN PAGE) */}
        <div className="flex-1 bg-[#F4FFF7] p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 p-4 rounded-full text-white text-2xl">
              🌱
            </div>
            <div>
              <h1 className="text-3xl font-bold text-green-700">FarmDirect</h1>
              <p className="text-green-600 text-sm">From Farm to Table</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Connect Directly with Local Farmers
          </h2>

          <p className="text-gray-700 mb-8">
            Fresh, organic produce delivered straight from local farms
            to your doorstep. Support sustainable agriculture and eat healthier.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="border border-green-300 p-5 rounded-xl bg-white shadow-sm">
              <FaTractor className="text-green-600 text-3xl mb-2" />
              <h3 className="font-semibold text-green-700">For Farmers</h3>
              <p className="text-gray-600 text-sm">
                Sell directly to consumers and grow your business.
              </p>
            </div>

            <div className="border border-green-300 p-5 rounded-xl bg-white shadow-sm">
              <FaUser className="text-green-600 text-3xl mb-2" />
              <h3 className="font-semibold text-green-700">For Consumers</h3>
              <p className="text-gray-600 text-sm">
                Access fresh, local produce at fair prices.
              </p>
            </div>
          </div>
        </div>

        {/*  RIGHT SIDE SIGN UP */}
        <div className="flex-1 p-10 bg-white flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-1 text-gray-800">Create Account</h2>
          <p className="text-gray-500 mb-6">Join our community of farmers and consumers</p>

          {/* ROLE SWITCH */}
          <div className="flex bg-gray-200 p-1 rounded-full mb-6">
            <button
              onClick={() => setAccountType("consumer")}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition flex justify-center items-center gap-2
              ${accountType === "consumer" ? "bg-white shadow text-green-700" : "text-gray-600"}`}
            >
              <FaUser /> Consumer
            </button>

            <button
              onClick={() => setAccountType("farmer")}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition flex justify-center items-center gap-2
              ${accountType === "farmer" ? "bg-white shadow text-green-700" : "text-gray-600"}`}
            >
              <FaUsers /> Farmer
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* FULL NAME */}
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="fullName"
                placeholder={accountType === "consumer" ? "Your Name" : "Farm Owner Name"}
                className="w-full border rounded-lg py-3 pl-10 outline-none"
                onChange={handleChange}
                value={formData.fullName}
                required
              />
            </div>

            {/* FARM NAME (ONLY FOR FARMERS) */}
            {accountType === "farmer" && (
              <div className="relative">
                <FaSeedling className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="farmName"
                  placeholder="Farm Name"
                  className="w-full border rounded-lg py-3 pl-10 outline-none"
                  onChange={handleChange}
                  value={formData.farmName}
                  required
                />
              </div>
            )}

            {/* EMAIL */}
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full border rounded-lg py-3 pl-10 outline-none"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full border rounded-lg py-3 pl-10 outline-none"
                onChange={handleChange}
                value={formData.password}
                required
              />
            </div>

            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium shadow-md transition">
              Create Account
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-green-600 font-medium">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}