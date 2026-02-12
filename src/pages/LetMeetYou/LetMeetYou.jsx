"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { IoMdArrowBack } from "react-icons/io"

import BasicInfoStep from "./BasicInfoStep"

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

  // Load saved form data
  useEffect(() => {
    const saved = localStorage.getItem("letMeetYouForm")
    if (saved) setFormData(JSON.parse(saved))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const gmailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/
    if (!gmailRegex.test(formData.workEmail)) {
      alert("Please enter a valid Gmail address")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    localStorage.setItem("letMeetYouForm", JSON.stringify(formData))
    navigate("/email-verification")
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      
      {/* MAIN CARD CONTAINER */}
      <div className="relative w-full max-w-[884px] min-h-[690px] bg-gray-50 rounded-xl flex flex-col lg:flex-row overflow-hidden">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-xl"
        >
          <IoMdArrowBack />
        </button>

        <main className="flex flex-col lg:flex-row h-full gap-10 px-6 lg:px-10 py-10 w-full">

          {/* MOBILE STEP HEADER */}
          <div className="lg:hidden w-full">
            <div className="flex gap-6 border-b pb-4 mb-6">
              <div className="text-[#095AD3] font-semibold border-b-2 border-[#095AD3] pb-2">
                Basic info
              </div>
              <div className="text-gray-400">
                Email verification
              </div>
            </div>
          </div>

          {/* DESKTOP LEFT SIDE */}
          <aside className="hidden lg:block w-1/3">
            <h1 className="text-4xl font-bold mb-4">
              Let's meet <br /> you
            </h1>

            <p className="text-[#475467] mb-10">
              Just a few details to get you started — including verifying your
              email — so we can personalize your setup.
            </p>

            <nav className="space-y-4">
              <div className="border-l-2 border-[#095AD3] pl-3 text-[#095AD3] font-semibold">
                Basic info
              </div>
              <div className="border-l-2 border-transparent pl-3 text-gray-400">
                Email verification
              </div>
            </nav>
          </aside>

          {/* FORM SECTION */}
          <section className="flex-1 flex flex-col items-start w-full">
            <BasicInfoStep
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              showConfirmPassword={showConfirmPassword}
              setShowConfirmPassword={setShowConfirmPassword}
            />

            {/* MOBILE FOOTER */}
            <div className="mt-8 lg:hidden w-full text-center">
              <p className="text-sm text-gray-600">
                Already on Enum?{" "}
                <span className="text-[#095AD3] font-semibold cursor-pointer">
                  Log in
                </span>
              </p>
            </div>
          </section>

        </main>
      </div>
    </div>
  )
}

export default LetMeetYou
