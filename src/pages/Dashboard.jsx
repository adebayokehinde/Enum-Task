import Header from "../components/Header";
import Sidebar from "../components/DashboardSidebar";
import DashboardBanner from "../components/DashboardBanner";
import NotificationCard from "../components/NotificationCard";
import CardRow from "../components/CardRow";
import CoursePerformance from "../components/CoursePerformance";
import RecentPartnerInstitutes from "../components/RecentPartnerInstitutes";
import Instructors from "../components/Instructors";
import MyCalander from "../components/MyCalander";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Sidebar />

      {/* Main Content */}
      <main className="ml-[286px] pt-[80px] px-8">
        {/* Dashboard Banner */}
        <DashboardBanner />

        {/* Welcome Row */}
        <div className="mt-6 w-full max-w-[1154px] flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            Welcome <b>Femi</b>
          </h1>

          <button className="flex items-center gap-1 text-sm bg-blue-600 text-white px-3 py-2 rounded">
            More actions
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Cards + Chart + Notifications */}
        <div className="mt-6 w-full max-w-[1154px] flex flex-wrap gap-4">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4 flex-1 min-w-[0]">
            <CardRow />
            <CoursePerformance />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 w-[343px] shrink-0">
            <NotificationCard />
            <MyCalander />
          </div>

        </div>

        {/* Tables */}
        <div className="mt-4 w-full max-w-[1154px] flex flex-col gap-4">
          <RecentPartnerInstitutes />
          <Instructors />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
