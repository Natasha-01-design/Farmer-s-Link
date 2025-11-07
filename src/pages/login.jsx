import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTractor, FaUser } from "react-icons/fa";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

export default function Login() {
  const [role, setRole] = useState("consumer");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4FFF7]">
      <div className="w-[90%] md:w-[85%] lg:w-[75%] flex flex-col lg:flex-row shadow-lg rounded-xl overflow-hidden bg-white">

        {/* LEFT SIDE */}
        <div className="flex-1 bg-[#F4FFF7] p-10 flex flex-col justify-center">
          {/* LOGO */}
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

          {/* Feature Cards */}
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

        {/* RIGHT SIDE LOGIN CARD */}
        <div className="flex-1 p-10 bg-white flex flex-col justify-center">

          <h2 className="text-2xl font-bold mb-1 text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 mb-6">Sign in to your account to continue</p>

          {/* ROLE SWITCH */}
          <div className="flex bg-gray-200 p-1 rounded-full mb-6">
            <button
              onClick={() => setRole("consumer")}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition
              ${role === "consumer" ? "bg-white shadow text-green-700" : "text-gray-600"}`}
            >
              <FaUser className="inline mr-2" />
              Consumer
            </button>

            <button
              onClick={() => setRole("farmer")}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition
              ${role === "farmer" ? "bg-white shadow text-green-700" : "text-gray-600"}`}
            >
              <FaTractor className="inline mr-2" />
              Farmer
            </button>
          </div>

          {/* EMAIL FIELD */}
          <div className="mb-4">
            <label className="text-gray-700 text-sm">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 mt-1">
              <AiOutlineMail className="text-gray-500" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-2 outline-none"
              />
            </div>
          </div>

          {/* PASSWORD FIELD */}
          <div className="mb-4">
            <label className="text-gray-700 text-sm">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 mt-1">
              <AiOutlineLock className="text-gray-500" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-2 outline-none"
              />
            </div>
          </div>

          {/* REMEMBER ME AND FORGOT PASSWORD */}
          <div className="flex justify-between items-center text-sm mb-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="text-green-600">Forgot password?</a>
          </div>

          {/* SUBMIT BUTTON */}
          <button className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg w-full font-semibold shadow-md transition">
            Sign In
          </button>

          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-green-600 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
