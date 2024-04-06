import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <form>
          {isSignUp && (
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                required
              />
            </div>
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-200 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-6 text-gray-700 bg-gray-200 rounded"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <p className="mt-4 text-center text-gray-400">
            {isSignUp ? (
              <span>
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-700"
                  onClick={handleSignInClick}
                >
                  Sign In
                </button>
              </span>
            ) : (
              <span>
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-700"
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </button>
              </span>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
