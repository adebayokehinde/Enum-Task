import { Sidebar } from "@/components/sidebar"
import { NotificationsSidebar } from "@/components/notifications-sidebar"
import { StatsCard } from "@/components/stats-card"
import { CourseChart } from "@/components/course-chart"
import { InstitutesTable } from "@/components/institutes-table"
import { InstructorsTable } from "@/components/instructors-table"
import { Button } from "@/components/ui/button"
import { Settings, Users, Building2, BookOpen } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Banner */}
          <div className="mb-6 rounded-xl bg-primary p-6 text-primary-foreground relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h1 className="mb-2 text-2xl font-bold">Your learning hub is almost ready!</h1>
              <p className="mb-4 text-sm opacity-90">
                To give your learners and partner institutions the best experience, we recommend setting up your hub
                preferences today.
              </p>
              <Button variant="secondary" size="sm">
                Configure hub
              </Button>
            </div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2">
              <Settings className="h-24 w-24 opacity-20" />
            </div>
          </div>

          {/* Welcome Section */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Welcome <span className="font-bold">Femi</span>
            </h2>
            <Button variant="default">
              More actions
              <span className="ml-2">▼</span>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            <StatsCard
              title="Total learners"
              value="2,114"
              icon={<Users className="h-12 w-12 text-primary" strokeWidth={1.5} />}
            />
            <StatsCard
              title="Partner institutes"
              value="2,114"
              icon={<Building2 className="h-12 w-12 text-purple-500" strokeWidth={1.5} />}
            />
            <StatsCard
              title="Live courses"
              value="2,114"
              icon={<BookOpen className="h-12 w-12 text-green-500" strokeWidth={1.5} />}
            />
          </div>

          {/* Course Chart */}
          <div className="mb-8">
            <CourseChart />
          </div>

          {/* Institutes Table */}
          <div className="mb-8">
            <InstitutesTable />
          </div>

          {/* Instructors Table */}
          <div>
            <InstructorsTable />
          </div>
        </div>
      </main>

      <NotificationsSidebar />
    </div>
  )
}
