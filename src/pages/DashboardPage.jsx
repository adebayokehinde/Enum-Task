import React, { useState } from 'react';
import { Home, Building2, Users, GraduationCap, FileText, CheckSquare, HelpCircle, FileEdit, CalendarIcon, Bell, Megaphone, User, Settings, LogOut, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(6);

  const sidebarItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Building2, label: 'Training institutes' },
    { icon: Users, label: 'Instructors' },
    { icon: GraduationCap, label: 'Learners' },
    { icon: FileText, label: 'Applications' },
    { icon: CheckSquare, label: 'Assessment' },
    { icon: HelpCircle, label: 'Question bank' },
    { icon: FileEdit, label: 'Forms' },
    { icon: CalendarIcon, label: 'Calendar' },
    { icon: Bell, label: 'Notifications' },
    { icon: Megaphone, label: 'Announcements' },
  ];

  const notifications = [
    { org: 'Semicolon Africa', action: 'Created a cohort', date: 'Jan 12, 2023', color: 'bg-red-500' },
    { org: 'Productive', action: 'Sent on 12 May 2025', date: 'Feb 12, 2023', color: 'bg-blue-900' },
    { org: 'Semicolon Africa', action: 'Created a program', date: 'Mar 12, 2023', color: 'bg-red-500' },
    { org: 'Semicolon Africa', action: 'Created a course', date: 'May 12, 2023', color: 'bg-red-500' },
  ];

  const institutes = [
    { name: 'Productive', location: 'Lagos, Nigeria', date: '12, Jan 2021', status: 'Active', pathways: 34, learners: 34, logo: 'bg-blue-900' },
    { name: 'Semicolon Africa', location: 'Nasarawa, Nigeria', date: '12, Jan 2021', status: 'Suspended', pathways: 5, learners: 5, logo: 'bg-red-500' },
    { name: 'Productive', location: 'Maiduguri, Nigeria', date: '12, Jan 2021', status: 'Pending', pathways: 3, learners: 3, logo: 'bg-blue-900' },
  ];

  const instructors = [
    { name: 'Adewale Michael', org: 'Semicolon Africa', date: '12, Jan 2021', status: 'Active', email: 'Adewale@gmail.com', courses: 24 },
    { name: 'Ashley Immanuel', org: 'Product dive', date: '12, Jan 2021', status: 'Suspended', email: 'Adewale@gmail.com', courses: 24 },
    { name: 'Ashley Immanuel', org: 'Product dive', date: '12, Jan 2021', status: 'Active', email: 'Adewale@gmail.com', courses: 24 },
  ];

  const chartData = Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    value: 60 + Math.random() * 20
  }));

  const calendarDays = [
    [28, 27, 28, 29, 30, 31, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 31, 1, 2, 3, 4, 5],
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full" />
            </div>
            <span className="text-xl font-bold text-blue-600">enum</span>
          </div>
        </div>

        <nav className="flex-1 px-3">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                item.active
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 mb-1">
            <User className="w-5 h-5" />
            <span className="text-sm">Profile</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 mb-1">
            <Settings className="w-5 h-5" />
            <span className="text-sm">Configuration</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Log out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Blue Banner */}
          <div className="bg-blue-600 rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-white text-2xl font-bold mb-2">
                Your learning hub is almost ready!
              </h2>
              <p className="text-blue-100 mb-4 max-w-xl">
                To give your learners and partner institutions the best experience, we recommend setting up your hub preferences today.
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Configure hub
              </button>
            </div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="opacity-20">
                <circle cx="60" cy="40" r="20" stroke="white" strokeWidth="8" />
                <path d="M40 80 L60 100 L80 80" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="90" cy="50" r="15" stroke="white" strokeWidth="6" />
              </svg>
            </div>
          </div>

          {/* Welcome Section */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-normal">
              Welcome <span className="font-semibold">Femi</span>
            </h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              More actions
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-sm text-gray-600 mb-2">Total learners</div>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold">2,114</div>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="20" r="8" stroke="#2563eb" strokeWidth="3" />
                  <path d="M15 45 Q15 30 30 30 Q45 30 45 45" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-sm text-gray-600 mb-2">Partner institutes</div>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold">2,114</div>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <rect x="15" y="35" width="30" height="15" stroke="#7c3aed" strokeWidth="3" />
                  <path d="M15 35 L30 20 L45 35" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="25" y1="40" x2="25" y2="50" stroke="#7c3aed" strokeWidth="3" />
                  <line x1="35" y1="40" x2="35" y2="50" stroke="#7c3aed" strokeWidth="3" />
                </svg>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-sm text-gray-600 mb-2">Live courses</div>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold">2,114</div>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M20 25 L20 45 L40 35 Z" stroke="#059669" strokeWidth="3" strokeLinejoin="round" />
                  <rect x="15" y="20" width="30" height="30" rx="3" stroke="#059669" strokeWidth="3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Course Performance */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Course performance</h3>
              <button className="text-blue-600 text-sm font-medium">Customize</button>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-4">Introduction to UX Design</h4>
              <div className="flex items-center gap-6 mb-6">
                <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">
                  Enrollment
                </button>
                <button className="text-gray-500 pb-2">In progress</button>
                <button className="text-gray-500 pb-2">Completion</button>
                <button className="text-gray-500 pb-2">Complaints</button>
                <div className="ml-auto flex gap-2">
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded">This year</button>
                  <button className="px-3 py-1 text-sm text-gray-500">This month</button>
                </div>
              </div>

              {/* Chart */}
              <div className="relative h-64">
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500">
                  <span>100</span>
                  <span>80</span>
                  <span>60</span>
                  <span>40</span>
                  <span>20</span>
                  <span>0</span>
                </div>
                <div className="ml-8 h-full relative">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <polyline
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      points={chartData.map((d, i) => 
                        `${(i / (chartData.length - 1)) * 100}%,${100 - d.value}%`
                      ).join(' ')}
                    />
                  </svg>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 mt-2">
                    {chartData.map((d, i) => (
                      <span key={i}>{d.month}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Partner Institutes */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Recent partner institutes</h3>
              <button className="text-blue-600 text-sm font-medium">View all</button>
            </div>

            <div className="flex gap-4 mb-4 border-b border-gray-200">
              <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">
                All(123)
              </button>
              <button className="text-gray-500 pb-2">Active(23)</button>
              <button className="text-gray-500 pb-2">Suspended(12)</button>
            </div>

            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-600 border-b border-gray-200">
                  <th className="pb-3 font-medium">Institutes</th>
                  <th className="pb-3 font-medium">Date joined</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">No of pathways</th>
                  <th className="pb-3 font-medium">No of learners</th>
                </tr>
              </thead>
              <tbody>
                {institutes.map((institute, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${institute.logo} rounded-full`} />
                        <div>
                          <div className="font-medium">{institute.name}</div>
                          <div className="text-sm text-gray-500">{institute.location}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-sm">{institute.date}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        institute.status === 'Active' ? 'bg-green-100 text-green-700' :
                        institute.status === 'Suspended' ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {institute.status}
                      </span>
                    </td>
                    <td className="py-4 text-sm">{institute.pathways}</td>
                    <td className="py-4 text-sm">{institute.learners}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Instructors */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Instructors</h3>
              <button className="text-blue-600 text-sm font-medium">View all</button>
            </div>

            <div className="flex gap-4 mb-4 border-b border-gray-200">
              <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">
                All(123)
              </button>
              <button className="text-gray-500 pb-2">Active(23)</button>
              <button className="text-gray-500 pb-2">Suspended(12)</button>
            </div>

            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-600 border-b border-gray-200">
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Date joined</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Email</th>
                  <th className="pb-3 font-medium">Active courses</th>
                </tr>
              </thead>
              <tbody>
                {instructors.map((instructor, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-full" />
                        <div>
                          <div className="font-medium">{instructor.name}</div>
                          <div className="text-sm text-gray-500">{instructor.org}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-sm">{instructor.date}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        instructor.status === 'Active' ? 'bg-green-100 text-green-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {instructor.status}
                      </span>
                    </td>
                    <td className="py-4 text-sm">{instructor.email}</td>
                    <td className="py-4 text-sm">{instructor.courses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 bg-white border-l border-gray-200 p-6 overflow-auto">
        {/* Recent Notifications */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Recent notifications</h3>
            <button className="text-blue-600 text-sm font-medium">View all</button>
          </div>
          <div className="space-y-3">
            {notifications.map((notif, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-8 h-8 ${notif.color} rounded-full flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm">{notif.org}</div>
                  <div className="text-xs text-gray-500">{notif.action}</div>
                </div>
                <div className="text-xs text-gray-500 whitespace-nowrap">{notif.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <button>
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h4 className="font-semibold">February 2022</h4>
            <button>
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sat', 'Su'].map((day) => (
              <div key={day} className="text-center text-xs text-gray-500 font-medium">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {calendarDays.flat().map((day, index) => (
              <button
                key={index}
                className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-colors ${
                  day === selectedDate
                    ? 'bg-blue-600 text-white font-medium'
                    : day > 27 && index < 7
                    ? 'text-gray-400'
                    : day < 7 && index > 27
                    ? 'text-gray-400'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedDate(day)}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* No Activities */}
        <div className="mt-8 text-center">
          <div className="w-16 h-16 mx-auto mb-3 text-gray-300">
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="12" y="16" width="40" height="40" rx="4" />
              <path d="M20 12 L20 20 M44 12 L44 20" strokeLinecap="round" />
              <path d="M32 32 L38 38 M32 32 L32 26" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-sm text-gray-500">There are no activities for today</p>
        </div>
      </aside>
    </div>
  );
}