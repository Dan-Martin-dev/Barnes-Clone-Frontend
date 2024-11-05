// Import necessary libraries and styles
import React from "react";
import axios from "axios";
import { Toaster } from "sonner";
/* import NavHeader from "@/components/header/NavHeader";
import useLogin from "@/hooks/useLogin";
 */

const Login = () => {

/*   const { email, setEmail, password, setPassword, isClient, handleSubmit } = useLogin();

  if (!isClient) {
    return null; // Optionally, render a loader here
  }
 */
  return (
    <div>
      <div className="flex items-center justify-center mt-[70px] px-4 sm:px-6 lg:px-8">
        {/* Card container */}
        <div className="max-w-md w-full space-y-8">
          {/* Card header */}
          <div>
            <h2 className="text-center text-2xl font-bold text-black">
              Create an account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter your email and password below to create an account.
            </p>
          </div>

          <Toaster position="top-right" expand={true} richColors />

          {/* Form */}
          <form
           /*  onSubmit={handleSubmit} */
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" value="true" />

            {/* Email/Password */}
            <div className="space-y-px">
              {/* Email */}
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
        /*           value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                  required
                  className="appearance-none rounded-xl relative block w-full mb-2 px-3 py-2 hover:border-gray-600 placeholder-gray-500 text-gray-900 bg-white focus:bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
  /*                 value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)} */
                  className="appearance-none rounded-xl relative block w-full mb-2 px-3 py-2 border-gray-300 placeholder-gray-500 text-gray-900 bg-white focus:bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            {/* Forgot/Remember */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-gray-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
