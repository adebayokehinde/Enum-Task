"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { IoMdArrowBack } from "react-icons/io"

import DetailsStep from "./DetailsStep"
import DescriptionStep from "./DescriptionStep"
import UsagePreferenceStep from "./UsagePreferenceStep"
import LogoStep from "./LogoStep"

const steps = ["Details", "Short description", "Usage preference", "Logo"]

export default function AddCompany() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    companyName: "",
    industry: "",
    website: "",
    siteName: "",
    companySize: "",
    description: "",
    usagePreferences: [],
    logo: "",
  })

  const [activeStep, setActiveStep] = useState("Details")

  // Load saved form & step
  useEffect(() => {
    const savedForm = localStorage.getItem("addCompanyForm")
    const savedStep = localStorage.getItem("addCompanyActiveStep")

    if (savedForm) setForm(JSON.parse(savedForm))
    if (savedStep) setActiveStep(savedStep)
  }, [])

  useEffect(() => {
    localStorage.setItem("addCompanyForm", JSON.stringify(form))
    localStorage.setItem("addCompanyActiveStep", activeStep)
  }, [form, activeStep])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const togglePreference = (option) => {
    setForm((prev) => ({
      ...prev,
      usagePreferences: prev.usagePreferences.includes(option)
        ? prev.usagePreferences.filter((item) => item !== option)
        : [...prev.usagePreferences, option],
    }))
  }

  const goToNextStep = () => {
    const currentIndex = steps.indexOf(activeStep)
    if (currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1])
    }
  }

  const renderStep = () => {
    switch (activeStep) {
      case "Details":
        return <DetailsStep form={form} handleChange={handleChange} goToNextStep={goToNextStep} />
      case "Short description":
        return <DescriptionStep form={form} handleChange={handleChange} goToNextStep={goToNextStep} />
      case "Usage preference":
        return <UsagePreferenceStep form={form} togglePreference={togglePreference} goToNextStep={goToNextStep} />
      case "Logo":
        return <LogoStep form={form} setForm={setForm} navigate={navigate} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="relative w-full max-w-[884px] min-h-[690px] bg-gray-50 rounded-xl flex flex-col lg:flex-row overflow-hidden">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-xl"
        >
          <IoMdArrowBack />
        </button>

        <main className="flex flex-col lg:flex-row h-full gap-6 lg:gap-10 w-full">

          {/* MOBILE STEP HEADER */}
          <div className="lg:hidden w-full px-6 mt-6">
            <div className="flex gap-6 border-b pb-4 mb-6 overflow-x-auto">
              {steps.map((step) => (
                <div
                  key={step}
                  className={`flex-1 text-center text-sm font-semibold whitespace-nowrap ${
                    activeStep === step
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-400"
                  }`}
                  onClick={() => setActiveStep(step)}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP LEFT SIDE */}
          <aside className="hidden lg:block w-[360px] px-8 py-12">
            <h2 className="text-[32px] font-bold mb-6">
              Add <br /> company
            </h2>

            <p className="text-gray-500 text-sm mb-10">
              Nice work, <span className="text-gray-900 font-medium">David</span>.<br />
              Let’s complete your setup.
            </p>

            <ul className="space-y-6">
              {steps.map((step) => (
                <li
                  key={step}
                  onClick={() => setActiveStep(step)}
                  className="flex items-center cursor-pointer"
                >
                  <span
                    className={`w-[3px] h-6 mr-4 rounded-full ${
                      activeStep === step ? "bg-blue-600" : "bg-transparent"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      activeStep === step ? "text-blue-600 font-semibold" : "text-gray-500"
                    }`}
                  >
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </aside>

          {/* FORM SECTION */}
          <section className="flex-1 bg-gray-50 p-10">
            <div className="bg-white rounded-2xl p-8 shadow-sm h-full overflow-y-auto">
              {renderStep()}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
