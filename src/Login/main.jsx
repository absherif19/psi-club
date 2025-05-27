import React, { useState } from "react";
import LoginForm from "./Login";
import SignUpForm from "./Signup";
import ImageSection from "./ImageSection";

const LoginWrapper = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {isSignUp ? (
        <SignUpForm onSwitch={() => setIsSignUp(false)} />
      ) : (
        <LoginForm onSwitch={() => setIsSignUp(true)} />
      )}
      <ImageSection />
    </div>
  );
};

export default LoginWrapper;
