import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./SideBar";
import { FiMenu } from "react-icons/fi";

// Steps with all relevant paths for each step
const steps = [
  { name: "Let’s meet you", paths: ["/", "/letmeetyou", "/email-verification"] },
  { name: "Add company", paths: ["/addcompany"] },
  { name: "Invite your team", paths: ["/inviteteam"] },
];

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  // Find current step index based on location, including subpages
  const currentIndex = steps.findIndex((step) =>
    step.paths.some((p) => location.pathname.toLowerCase() === p.toLowerCase())
  );

  return (
    <div className="flex min-h-screen relative">

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setShowSidebar(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
      >
        <FiMenu size={22} />
      </button>

      {/* SIDEBAR */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      {/* MAIN CONTENT */}
      <main className="flex-1 md:ml-64">
        <Outlet />
      </main>

      {/* Bottom page indicator */}
      <div className="flex justify-center items-center gap-2 mt-4 absolute bottom-4 w-full">
        {steps.map((step, index) => (
          <div key={step.name} className="relative w-[88px] h-2">
            {/* Gray line */}
            <div className="w-full h-2 bg-gray-300 rounded-md"></div>

            {/* Blue line for active page */}
            {currentIndex === index && (
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 rounded-md transition-all duration-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
