"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { IoMdArrowBack } from "react-icons/io"

const EmailVerification = () => {
  const [email, setEmail] = useState("")
  const [timer, setTimer] = useState(120)
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [toast, setToast] = useState("")

  const navigate = useNavigate()

  // Load email from localStorage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("letMeetYouForm"))
    if (savedData && savedData.workEmail) setEmail(savedData.workEmail)
  }, [])

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setToast("Verification successful!")

    setTimeout(() => {
      setToast("")
      navigate("/addcompany")
    }, 2000)
  }

  const minutes = Math.floor(timer / 60)
  const seconds = String(timer % 60).padStart(2, "0")

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">

      {/* MAIN CONTAINER */}
      <div className="relative w-full max-w-[884px] min-h-[634px] bg-gray-50 rounded-xl overflow-hidden flex flex-col lg:flex-row">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-xl"
        >
          <IoMdArrowBack />
        </button>

        <main className="flex flex-col lg:flex-row w-full gap-10 px-6 lg:px-10 py-10">

          {/* MOBILE STEP HEADER */}
          <div className="lg:hidden w-full">
            <div className="flex gap-6 border-b pb-4 mb-6">
              <div className="text-gray-400">Basic info</div>
              <div className="text-[#095AD3] font-semibold border-b-2 border-[#095AD3] pb-2">
                Email verification
              </div>
            </div>
          </div>

          {/* DESKTOP LEFT STEPPER */}
          <aside className="hidden lg:block w-1/3">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Let’s meet you
            </h1>

            <p className="text-gray-600 mb-10">
              Just a few details to get you started — including verifying your
              email — so we can personalize your setup.
            </p>

            <nav className="space-y-4">
              <div className="border-l-2 border-transparent pl-3 text-gray-400">
                Basic info
              </div>

              <div className="border-l-2 border-[#095AD3] pl-3 text-[#095AD3] font-semibold">
                Email verification
              </div>
            </nav>
          </aside>

          {/* RIGHT SECTION */}
          <section className="flex-1 flex justify-center w-full">
            <div className="w-full max-w-[404px] bg-white p-6 lg:p-8 rounded-xl border border-gray-200 shadow-sm">

              <h2 className="text-xl font-semibold mb-6">
                Email verification
              </h2>

              <p className="mb-4 text-gray-600">
                Enter the code we sent to{" "}
                <span className="font-semibold text-gray-900">{email}</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* OTP INPUTS */}
                <div className="flex gap-2 justify-between">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      maxLength={1}
                      placeholder="-"
                      className="w-10 h-12 text-center text-lg border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  ))}
                </div>

                {/* TIMER */}
                <p className="text-blue-600 text-sm">
                  {minutes}:{seconds}
                </p>

                {/* HELP SECTION */}
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Didn’t receive the email?
                  </h3>

                  <ul className="list-decimal list-inside text-gray-600 text-sm space-y-3">
                    <li>Check spam or promotions.</li>
                    <li>Confirm your email is correct.</li>
                    <li>Email may be auto-filled incorrectly.</li>
                    <li>Company filters blocked email.</li>
                  </ul>

                  <p className="text-blue-600 text-sm mt-3 cursor-pointer hover:underline">
                    Re-enter your email address
                  </p>
                </div>

                {/* SUBMIT */}
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Verify
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>

        {/* TOAST */}
        {toast && (
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg animate-fadeInOut">
            {toast}
          </div>
        )}

        {/* ANIMATION */}
        <style>{`
          @keyframes fadeInOut {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
          }
          .animate-fadeInOut {
            animation: fadeInOut 2s forwards;
          }
        `}</style>

      </div>
    </div>
  )
}

export default EmailVerification
