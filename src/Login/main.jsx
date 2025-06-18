import React, { useState } from "react";
import LoginForm from "./Login";
import ImageSection from "./ImageSection";
import SignupForm from "./Signup";

const LoginWrapper = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchToSignup = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {isLogin ? (
        <LoginForm onSwitch={switchToSignup} />
      ) : (
        <SignupForm onSwitch={switchToLogin} />
      )}
      <ImageSection />
    </div>
  );
};

export default LoginWrapper;
