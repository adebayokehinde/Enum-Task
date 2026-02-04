import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/DashboardSidebar";
import DashboardBanner from "../components/DashboardBanner";
import NotificationCard from "../components/NotificationCard";
import CardRow from "../components/Cards/CardRow";
import CoursePerformance from "../components/CoursePerformance";
import RecentPartnerInstitutes from "../components/RecentPartnerInstitutes";
import Instructors from "../components/Instructors";
import MyCalander from "../components/Calendar/MyCalander";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content */}
      <main className="pt-[80px] px-4 lg:px-8 lg:ml-[286px]">
        
        <DashboardBanner />

        <div className="mt-6 w-full max-w-[1154px] flex justify-between items-center"> 
          <h1 className="text-xl font-semibold text-gray-800"> Welcome <b>Femi</b> </h1>
           <button className="flex items-center gap-1 text-sm bg-blue-600 text-white px-3 py-2 rounded"> More actions
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" > 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /> </svg> 
            </button> 
        </div>

        <div className="mt-6 flex flex-col lg:flex-row gap-4">
          
          {/* Left */}
          <div className="flex flex-col gap-4 flex-1">
            <CardRow />
            <CoursePerformance />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 lg:w-[343px]">
            <NotificationCard />
            <MyCalander />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <RecentPartnerInstitutes />
          <Instructors />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
