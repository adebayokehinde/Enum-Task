import React from 'react';
import logo from "../assets/Enum_Logo_White 1.png";


const LetMeetYouMobile = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-8">
      {/* Logo */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-600">
          <span className="inline-block transform rotate-90 mr-1">↻</span>Enum
        </h1>
      </div>

      {/* Title & Description */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Let's meet you</h2>
        <p className="text-sm text-gray-500 mt-2">
          Just a few details to get you started — including verifying your email — so we can personalize your setup and unlock the right tools for you.
        </p>
      </div>

      {/* Form */}
      <form className="w-full max-w-sm space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First name*</label>
          <input
            type="text"
            placeholder="Enter hub name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Last name*</label>
          <input
            type="text"
            placeholder="Enter hub name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Work email*</label>
          <input
            type="email"
            placeholder="Enter hub name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password*</label>
          <input
            type="password"
            placeholder="Enter hub name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Next Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Next
        </button>
      </form>

      {/* Footer */}
      <div className="mt-6 text-sm text-gray-600">
        Already on Enum?{' '}
        <a href="/login" className="text-blue-600 hover:underline">
          Log in
        </a>
      </div>
    </div>
  );
};

export default LetMeetYouMobile;
