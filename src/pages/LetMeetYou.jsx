"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const LetMeetYou = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  useEffect(() => {
    const savedData = localStorage.getItem("letMeetYouForm")
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    console.log("Form submitted:", formData)
    localStorage.setItem("letMeetYouForm", JSON.stringify(formData))
    alert("Data saved locally!")
  }

  const handleEmailVerificationClick = () => {
    navigate("/email-verification")
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <div className="p-4 md:hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Enum_Logo_Blue-removebg-preview%202-f8lCJdv6ibCk2Z4U4vN0fPkbEOYDsP.png"
          alt="Enum Logo"
          className="h-6"
        />
      </div>

      {/* Top Right Login Link - hidden on mobile, shown on desktop */}
      <div className="hidden md:flex w-full justify-end text-sm p-4">
        <p>
          Already on Enum?{" "}
          <a href="#" className="font-semibold text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col lg:flex-row gap-12 px-4 md:px-6 lg:px-10 py-6 overflow-y-auto">
        <div className="hidden lg:block w-full lg:w-1/3 order-2 lg:order-1">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Let's meet you</h1>
            <p className="text-gray-600 mb-8">
              Just a few details to get you started — including verifying your email — so we can personalize your setup
              and unlock the right tools for you.
            </p>

            <nav className="space-y-4">
              <span className="flex items-center p-3 border-l-4 border-blue-600 font-semibold text-blue-600">
                Basic info
              </span>
              <button
                onClick={handleEmailVerificationClick}
                className="flex items-center p-3 border-l-4 border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
              >
                Email verification
              </button>
            </nav>
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col items-start justify-start order-1 lg:order-2">
          <div className="w-full mb-6 lg:hidden">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Let's meet you</h1>
            <p className="text-sm text-gray-600">
              Just a few details to get you started — including verifying your email — so we can personalize your setup
              and unlock the right tools for you.
            </p>
          </div>

          <div className="w-full max-w-lg bg-white p-6 md:p-8 rounded-lg md:rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg md:text-xl font-semibold mb-6">Basic info</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter hub name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter hub name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Work Email */}
              <div>
                <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Work email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="workEmail"
                  id="workEmail"
                  placeholder="Enter hub name"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password<span className="text-red-500">*</span>
                </label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter hub name"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 px-3 text-sm text-gray-500 hover:text-blue-600"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="hidden lg:block">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm password<span className="text-red-500">*</span>
                </label>
                <div className="relative mt-1">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Enter password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 px-3 text-sm text-gray-500 hover:text-blue-600"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="py-2 px-8 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 font-medium"
                >
                  Next
                </button>
              </div>
            </form>
          </div>

          <div className="w-full text-center mt-8 lg:hidden">
            <p className="text-sm text-gray-600">
              Already on Enum?{" "}
              <a href="#" className="font-semibold text-blue-600 hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LetMeetYou
