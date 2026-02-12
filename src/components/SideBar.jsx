import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/Enum_Logo_White 1.png"
import { IoClose } from "react-icons/io5"

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

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <>
      {/* OVERLAY (mobile only) */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      <div
        className={`
        fixed top-0 left-0 h-screen w-64 bg-blue-600 text-white flex flex-col p-6 z-50
        transform transition-transform duration-300
        ${showSidebar ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        `}
      >
        {/* CLOSE BUTTON (mobile only) */}
        <button
          className="md:hidden absolute top-4 right-4"
          onClick={() => setShowSidebar(false)}
        >
          <IoClose size={24} />
        </button>

        {/* LOGO */}
        <div className="mb-12">
          <img src={logo} alt="Logo" className="w-20 h-5" />
        </div>

        {/* STEPS */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <NavLink key={step.path} to={step.path} className="flex gap-4">
              {({ isActive }) => (
                <>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isActive
                          ? "bg-white border-white"
                          : "border-white"
                      }`}
                    >
                      {isActive && (
                        <span className="w-2 h-2 bg-blue-600 rounded-full" />
                      )}
                    </div>

                    {index !== steps.length - 1 && (
                      <div className="w-px h-12 bg-white mt-1" />
                    )}
                  </div>

                  <div>
                    <p className="font-semibold">{step.name}</p>
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
    </>
  )
}

export default Sidebar
