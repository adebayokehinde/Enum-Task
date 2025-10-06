"use client"

import { useState } from "react"
import {
  Home,
  Building2,
  Users,
  GraduationCap,
  FileText,
  CheckSquare,
  HelpCircle,
  FileEdit,
  CalendarIcon,
  Bell,
  Megaphone,
  User,
  Settings,
  LogOut,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(6)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const sidebarItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Building2, label: "Training institutes" },
    { icon: Users, label: "Instructors" },
    { icon: GraduationCap, label: "Learners" },
    { icon: FileText, label: "Applications" },
    { icon: CheckSquare, label: "Assessment" },
    { icon: HelpCircle, label: "Question bank" },
    { icon: FileEdit, label: "Forms" },
    { icon: CalendarIcon, label: "Calendar" },
    { icon: Bell, label: "Notifications" },
    { icon: Megaphone, label: "Announcements" },
  ]

  const notifications = [
    {
      org: "Semicolon Africa",
      action: "Created a cohort",
      date: "Jan 12, 2023",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group%20%281%29-ijCVmHw7LWNkzgitLZKGo0o4g2kEMo.png",
    },
    {
      org: "Productive",
      action: "Sent on 12 May 2025",
      date: "Feb 12, 2023",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PD-Logo_Stack-removebg-preview%201-AiDU18fbCcFCaZY9MNmhVIOVRy8A1H.png",
    },
    {
      org: "Semicolon Africa",
      action: "Created a program",
      date: "Mar 12, 2023",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group%20%281%29-ijCVmHw7LWNkzgitLZKGo0o4g2kEMo.png",
    },
    {
      org: "Semicolon Africa",
      action: "Created a course",
      date: "May 12, 2023",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group%20%281%29-ijCVmHw7LWNkzgitLZKGo0o4g2kEMo.png",
    },
  ]

  const institutes = [
    {
      name: "Productive",
      location: "Lagos, Nigeria",
      date: "12, Jan 2021",
      status: "Active",
      pathways: 34,
      learners: 34,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PD-Logo_Stack-removebg-preview%201-AiDU18fbCcFCaZY9MNmhVIOVRy8A1H.png",
    },
    {
      name: "Semicolon Africa",
      location: "Nasarawa, Nigeria",
      date: "12, Jan 2021",
      status: "Suspended",
      pathways: 5,
      learners: 5,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group%20%282%29-0pFNsrLcUpVaBey8zLyyALBFgji0Lh.png",
    },
    {
      name: "Productive",
      location: "Maiduguri, Nigeria",
      date: "12, Jan 2021",
      status: "Pending",
      pathways: 3,
      learners: 3,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PD-Logo_Stack-removebg-preview%201-AiDU18fbCcFCaZY9MNmhVIOVRy8A1H.png",
    },
  ]

  const instructors = [
    {
      name: "Adewale Michael",
      org: "Semicolon Africa",
      date: "12, Jan 2021",
      status: "Active",
      email: "Adewale@gmail.com",
      courses: 24,
      avatar: null,
    },
    {
      name: "Ashley Immanuel",
      org: "Product dive",
      date: "12, Jan 2021",
      status: "Suspended",
      email: "Adewale@gmail.com",
      courses: 24,
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ashley-Immanuel%201-h3CtEtwmugxXyHY6cI5I4tykdrLJRC.png",
    },
    {
      name: "Ashley Immanuel",
      org: "Product dive",
      date: "12, Jan 2021",
      status: "Active",
      email: "Adewale@gmail.com",
      courses: 24,
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ashley-Immanuel%201-h3CtEtwmugxXyHY6cI5I4tykdrLJRC.png",
    },
  ]

  const chartData = Array.from({ length: 12 }, (_, i) => ({
    month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
    value: 60 + Math.random() * 20,
  }))

  const calendarDays = [
    [28, 27, 28, 29, 30, 31, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 31, 1, 2, 3, 4, 5],
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4 py-3">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Enum_Logo_Blue-removebg-preview%202-f8lCJdv6ibCk2Z4U4vN0fPkbEOYDsP.png"
          alt="Enum Logo"
          className="h-6"
        />
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 hidden lg:block">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Enum_Logo_Blue-removebg-preview%202-f8lCJdv6ibCk2Z4U4vN0fPkbEOYDsP.png"
            alt="Enum Logo"
            className="h-8"
          />
        </div>

        <nav className="flex-1 px-3 pt-20 lg:pt-0">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                item.active ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
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

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      <main className="flex-1 overflow-auto pt-16 lg:pt-0">
        <div className="p-4 lg:p-8">
          <div className="bg-blue-600 rounded-2xl p-6 lg:p-8 mb-6 lg:mb-8 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-white text-lg lg:text-2xl font-bold mb-2">Your learning hub is almost ready!</h2>
              <p className="text-blue-100 text-sm lg:text-base mb-4 max-w-xl">
                To give your learners and partner institutions the best experience, we recommend setting up your hub
                preferences today.
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm lg:text-base">
                Configure hub
              </button>
            </div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="opacity-20">
                <circle cx="60" cy="40" r="20" stroke="white" strokeWidth="8" />
                <path
                  d="M40 80 L60 100 L80 80"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="90" cy="50" r="15" stroke="white" strokeWidth="6" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 lg:mb-8 gap-4">
            <h1 className="text-xl lg:text-2xl font-normal">
              Welcome <span className="font-semibold">Sam</span>
            </h1>
            {/* More actions button - hidden on mobile, shown on desktop */}
            <button className="hidden lg:flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              More actions
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200">
              <div className="text-xs lg:text-sm text-gray-600 mb-2">Total learners</div>
              <div className="flex items-end justify-between">
                <div className="text-2xl lg:text-3xl font-bold">2,114</div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/users-01-DC5ZWi9woWbVXixvQrVMtEUFfynN4c.png"
                  alt="Users"
                  className="w-10 h-10 lg:w-14 lg:h-14"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200">
              <div className="text-xs lg:text-sm text-gray-600 mb-2">Partner institutes</div>
              <div className="flex items-end justify-between">
                <div className="text-2xl lg:text-3xl font-bold">2,114</div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/building-08-vohUpLVOsZuaOo8dHznqAgkGiZsvQf.png"
                  alt="Building"
                  className="w-10 h-10 lg:w-14 lg:h-14"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 hidden lg:block">
              <div className="text-xs lg:text-sm text-gray-600 mb-2">Live courses</div>
              <div className="flex items-end justify-between">
                <div className="text-2xl lg:text-3xl font-bold">2,114</div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book-open-01-TnSb95vr4PiHvzBpslpWdASp3Y9YmT.png"
                  alt="Book"
                  className="w-10 h-10 lg:w-14 lg:h-14"
                />
              </div>
            </div>
          </div>

          <button className="w-full lg:hidden flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-6">
            More actions
            <ChevronDown className="w-4 h-4" />
          </button>

          <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8 hidden lg:block">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Course performance</h3>
              <button className="text-blue-600 text-sm font-medium">Customize</button>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-4">Introduction to UX Design</h4>
              <div className="flex items-center gap-6 mb-6">
                <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">Enrollment</button>
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
                      points={chartData
                        .map((d, i) => `${(i / (chartData.length - 1)) * 100}%,${100 - d.value}%`)
                        .join(" ")}
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

          <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 mb-6 lg:mb-8">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <h3 className="text-lg lg:text-xl font-semibold">Recent partner institutes</h3>
              <button className="text-blue-600 text-sm font-medium">View all</button>
            </div>

            <div className="flex gap-4 mb-4 border-b border-gray-200 overflow-x-auto">
              <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium whitespace-nowrap text-sm">
                All(123)
              </button>
              <button className="text-gray-500 pb-2 whitespace-nowrap text-sm">Active(23)</button>
              <button className="text-gray-500 pb-2 whitespace-nowrap text-sm">Suspended(12)</button>
            </div>

            <div className="lg:hidden space-y-4">
              {institutes.map((institute, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex items-start gap-3 mb-2">
                    <img
                      src={institute.logo || "/placeholder.svg"}
                      alt={institute.name}
                      className="w-12 h-12 object-contain flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-base">{institute.name}</div>
                      <div className="text-sm text-gray-500">{institute.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{institute.date}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        institute.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : institute.status === "Suspended"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {institute.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Updated 8/01/</div>
                </div>
              ))}
            </div>

            <table className="w-full hidden lg:table">
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
                        <img
                          src={institute.logo || "/placeholder.svg"}
                          alt={institute.name}
                          className="w-10 h-10 object-contain"
                        />
                        <div>
                          <div className="font-medium">{institute.name}</div>
                          <div className="text-sm text-gray-500">{institute.location}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-sm">{institute.date}</td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          institute.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : institute.status === "Suspended"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
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

          <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 mb-6 lg:mb-0">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <h3 className="text-lg lg:text-xl font-semibold">Instructors</h3>
              <button className="text-blue-600 text-sm font-medium">View all</button>
            </div>

            <div className="flex gap-4 mb-4 border-b border-gray-200 overflow-x-auto">
              <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium whitespace-nowrap text-sm">
                All(123)
              </button>
              <button className="text-gray-500 pb-2 whitespace-nowrap text-sm">Active(23)</button>
              <button className="text-gray-500 pb-2 whitespace-nowrap text-sm">Suspended(12)</button>
            </div>

            <div className="lg:hidden space-y-4">
              {instructors.map((instructor, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex items-start gap-3 mb-2">
                    {instructor.avatar ? (
                      <img
                        src={instructor.avatar || "/placeholder.svg"}
                        alt={instructor.name}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-gray-600" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-base">{instructor.name}</div>
                      <div className="text-sm text-gray-500">{instructor.org}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{instructor.date}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        instructor.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}
                    >
                      {instructor.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Updated 8/01/</div>
                </div>
              ))}
            </div>

            <table className="w-full hidden lg:table">
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
                        {instructor.avatar ? (
                          <img
                            src={instructor.avatar || "/placeholder.svg"}
                            alt={instructor.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-gray-600" />
                          </div>
                        )}
                        <div>
                          <div className="font-medium">{instructor.name}</div>
                          <div className="text-sm text-gray-500">{instructor.org}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-sm">{instructor.date}</td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          instructor.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                      >
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

          <div className="lg:hidden mt-6 space-y-6">
            {/* Recent Notifications */}
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Recent notifications</h3>
                <button className="text-blue-600 text-sm font-medium">View all</button>
              </div>
              <div className="space-y-3">
                {notifications.map((notif, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <img
                      src={notif.logo || "/placeholder.svg"}
                      alt={notif.org}
                      className="w-8 h-8 rounded-full object-contain flex-shrink-0"
                    />
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
            <div className="bg-white rounded-xl p-4 border border-gray-200">
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
                {["Mo", "Tu", "We", "Th", "Fr", "Sat", "Su"].map((day) => (
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
                        ? "bg-blue-600 text-white font-medium"
                        : day > 27 && index < 7
                          ? "text-gray-400"
                          : day < 7 && index > 27
                            ? "text-gray-400"
                            : "text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedDate(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* No Activities */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-16 h-16 mx-auto mb-3 text-gray-300">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="12" y="16" width="40" height="40" rx="4" />
                  <path d="M20 12 L20 20 M44 12 L44 20" strokeLinecap="round" />
                  <path d="M32 32 L38 38 M32 32 L32 26" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">There are no activities for today</p>
            </div>
          </div>
        </div>
      </main>

      <aside className="w-80 bg-white border-l border-gray-200 p-6 overflow-auto hidden lg:block">
        {/* Recent Notifications */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Recent notifications</h3>
            <button className="text-blue-600 text-sm font-medium">View all</button>
          </div>
          <div className="space-y-3">
            {notifications.map((notif, index) => (
              <div key={index} className="flex items-start gap-3">
                <img
                  src={notif.logo || "/placeholder.svg"}
                  alt={notif.org}
                  className="w-8 h-8 rounded-full object-contain flex-shrink-0"
                />
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
            {["Mo", "Tu", "We", "Th", "Fr", "Sat", "Su"].map((day) => (
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
                    ? "bg-blue-600 text-white font-medium"
                    : day > 27 && index < 7
                      ? "text-gray-400"
                      : day < 7 && index > 27
                        ? "text-gray-400"
                        : "text-gray-700 hover:bg-gray-200"
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
  )
}
