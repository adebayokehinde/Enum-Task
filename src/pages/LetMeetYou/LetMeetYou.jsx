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

  
  useEffect(() => {
    const handleResize = () => {
      const path = window.location.pathname

      if (window.innerWidth < 768 && path !== "/letmeetyoumobile") {
        navigate("/letmeetyoumobile")
      } else if (window.innerWidth >= 768 && path !== "/letmeetyou") {
        navigate("/letmeetyou")
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [navigate])

 
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
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="relative w-[884px] h-[690px] bg-gray-50 rounded-xl flex overflow-hidden">

        {/* Back arrow */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-2 left-9 text-xl"
        >
          <IoMdArrowBack />
        </button>

        <main className="flex h-full gap-12 px-10 py-8 overflow-y-auto">

          {/* LEFT SIDE (desktop only) */}
          <aside className="hidden lg:block w-1/3">
            <h1 className="text-4xl font-bold mb-4">
              Let's meet <br /> you
            </h1>

            <p className="text-[#475467] mb-10">
              Just a few details to get you started — including verifying your
              email — so we can personalize your setup.
            </p>

            <nav className="space-y-4">
              <div className="flex items-center border-l-2 border-[#095AD3] pl-3 text-[#095AD3] font-semibold">
                Basic info
              </div>
              <div className="flex items-center border-l-2 border-transparent pl-3 text-gray-400">
                Email verification
              </div>
            </nav>
          </aside>

          {/* RIGHT SIDE (form area) */}
          <section className="flex-1 flex flex-col items-start">
            <BasicInfoStep
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              showConfirmPassword={showConfirmPassword}
              setShowConfirmPassword={setShowConfirmPassword}
            />

            {/* Mobile footer */}
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
