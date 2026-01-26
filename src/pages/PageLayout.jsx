import React from "react"
import { useLocation } from "react-router-dom"

const steps = ["/letmeetyou", "/addcompany", "/inviteteam"]

const PageLayout = ({ children }) => {
  const location = useLocation()
  const activeIndex = steps.indexOf(location.pathname)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <div className="flex-1">{children}</div>

      {/* Bottom indicator line */}
      <div className="h-2 w-full bg-gray-300 flex">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`flex-1 transition-all duration-300 ${
              activeIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default PageLayout
