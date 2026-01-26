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

   
      <div className="mb-12">
        <img src={logo} alt="Logo" className="w-20 h-5" />
      </div>

     
      <div className="space-y-2">
        {steps.map((step, index) => (
          <NavLink
            key={step.path}
            to={step.path}
            className={({ isActive }) =>
              `flex gap-4 ${
                isActive ? "text-white-300 font-semibold" : "text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
               
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      isActive
                        ? "bg-white border-white"
                        : "border-white bg-blue-600"
                    }`}
                  />

                  
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
  )
}

export default Sidebar
