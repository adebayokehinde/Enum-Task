import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/Enum_Logo_White 1.png"

const steps = [
  {
    name: "Let’s meet you",
    description: "With your name and work email",
    path: "/letmeetyou",
  },
  {
    name: "Add company",
    description: "Create your space on Enum",
    path: "/addcompany",
  },
  {
    name: "Invite your team",
    description: "Start collaborating with your team",
    path: "/inviteteam",
  },
]

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-blue-600 text-white flex flex-col p-6">
      
      {/* Logo */}
      <div className="mb-12">
        <img src={logo} alt="Logo" className="w-20 h-5" />
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <NavLink
            key={step.path}
            to={step.path}
            className="flex gap-4"
          >
            {({ isActive }) => (
              <>
                {/* Indicator */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-white border-white"
                        : "border-white bg-blue-600"
                    }`}
                  >
                    {/* Inner dot (the “hole”) */}
                    {isActive && (
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    )}
                  </div>

                  {/* Connector line */}
                  {index !== steps.length - 1 && (
                    <div className="w-px h-12 bg-white mt-1" />
                  )}
                </div>

                {/* Text */}
                <div>
                  <p className={`font-semibold ${isActive ? "text-white" : "text-white/90"}`}>
                    {step.name}
                  </p>
                  <p className="text-sm text-white/80">
                    {step.description}
                  </p>
                </div>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
