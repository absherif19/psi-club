import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi"; // Back icon
import psiLogo from "/psi-logo.svg";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ isRequestingAccess, setIsRequestingAccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim().toLowerCase() === "said") {
      navigate("/chairman");
    } else {
      navigate("/main");
    }
  };

  return (
    <div className="w-full lg:w-1/2 h-screen flex flex-col justify-center items-center bg-white px-8">
      <AnimatePresence mode="wait">
        {isRequestingAccess ? (
          <motion.div
            key="request-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-sm mb-6 flex items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <img src={psiLogo} alt="PSI Logo" className="mb-2" />
              <div className="flex items-center">
                <button
                  onClick={() => setIsRequestingAccess(false)}
                  className="absolute left-0 w-9 h-9 rounded-full border border-[#1E222E] flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <FiArrowLeft className="text-[#1E222E]" />
                </button>
                <div>
                  <h2 className="text-[36px] text-[#1E222E] font-semibold mb-1">
                    Get Started
                  </h2>
                  <p className="text-[#5F6D7E] text-[18px]">
                    Getting started is easy
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="login-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center mb-6"
          >
            <img src={psiLogo} alt="PSI Logo" className="mb-5" />
            <h2 className="text-[36px] text-[#1E222E] font-semibold mb-1">
              Welcome Back
            </h2>
            <p className="text-[#5F6D7E] text-[18px] mb-2">
              Login into your account
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-sm space-y-4 min-h-[180px]">
        <AnimatePresence mode="wait">
          {!isRequestingAccess ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-[#CBD5E1] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-[#CBD5E1] rounded-md px-4 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setRememberMe(!rememberMe)}
                >
                  <div
                    className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
                      rememberMe ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                        rememberMe ? "translate-x-5" : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                  <span className="text-sm text-[#1E222E]">Remember me</span>
                </div>

                <a href="#" className="text-orange-500 hover:underline">
                  forgot password
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="request"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-[#CBD5E1] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Department"
                className="w-full border border-[#CBD5E1] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        {isRequestingAccess ? (
          <button
            onClick={() => {
              // Handle Send Request (you can implement it later)
            }}
            className="w-full cursor-pointer bg-[#E85D04] text-white py-2 rounded-md text-sm hover:bg-orange-600 transition"
          >
            Send Request
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="w-full cursor-pointer bg-[#E85D04] text-white py-2 rounded-md text-sm hover:bg-orange-600 transition"
          >
            Login
          </button>
        )}

        {/* <button
          onClick={() => setIsRequestingAccess(!isRequestingAccess)}
          className="block mx-auto cursor-pointer font-[500] mt-2 text-sm text-orange-500 hover:underline"
        >
          {isRequestingAccess ? "" : "Request Access"}
        </button> */}
      </div>
    </div>
  );
};

export default LoginForm;
