import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./SideBar";

const steps = ["/letmeetyou", "/addcompany", "/inviteteam"];

const Layout = () => {
  const location = useLocation();

  // Map location.pathname to the correct step
  const activeIndex = steps.findIndex((step) => {
    // Normalize: lowercase both
    const stepPath = step.toLowerCase();
    const locPath = location.pathname.toLowerCase();
    return locPath === stepPath || locPath.startsWith(stepPath + "/");
  });

  const currentIndex = activeIndex !== -1 ? activeIndex : 0; // default to first step

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col ml-64">
        {/* Main content */}
        <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>

        {/* Bottom page indicator */}
        <div className="flex justify-center items-center gap-8 ">
          {steps.map((step, index) => (
            <div key={step} className="relative w-[88px] h-2">
              {/* Gray line */}
              <div className="w-[88px] h-2 bg-gray-300 rounded-md"></div>

              {/* Blue line for active page */}
              {currentIndex === index && (
                <div className="absolute top-0 left-0 w-[88px] h-2 bg-blue-600 rounded-md"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
