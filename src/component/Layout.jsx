import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./SideBar";

const steps = ["/letmeetyou", "/addcompany", "/inviteteam"];

const Layout = () => {
  const location = useLocation();
  const activeIndex = steps.indexOf(location.pathname);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (fixed) */}
      <Sidebar />

      {/* Page content shifted to the right */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Main content */}
        <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>

        {/* Bottom page indicator */}
        <div className="flex justify-center items-center gap-8 mb-6">
          {steps.map((step, index) => (
            <div key={step} className="relative w-[88px] h-2">
              {/* Gray line */}
              <div className="w-[88px] h-2 bg-gray-300 rounded-md"></div>

              {/* Blue line for active page */}
              {activeIndex === index && (
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
