"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Building2,
  Users,
  GraduationCap,
  FileText,
  CheckSquare,
  HelpCircle,
  FileStack,
  Calendar,
  Bell,
  Megaphone,
  User,
  Settings,
  LogOut,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Training institutes", href: "/institutes", icon: Building2 },
  { name: "Instructors", href: "/instructors", icon: Users },
  { name: "Learners", href: "/learners", icon: GraduationCap },
  { name: "Applications", href: "/applications", icon: FileText },
  { name: "Assessment", href: "/assessment", icon: CheckSquare },
  { name: "Question bank", href: "/questions", icon: HelpCircle },
  { name: "Forms", href: "/forms", icon: FileStack },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Announcements", href: "/announcements", icon: Megaphone },
]

const bottomNavigation = [
  { name: "Profile", href: "/profile", icon: User },
  { name: "Configuration", href: "/settings", icon: Settings },
  { name: "Log out", href: "/logout", icon: LogOut },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col border-r border-border bg-card">
      {/* Logo */}
      <div className="flex h-16 items-center px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary-foreground">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-xl font-semibold text-primary">enum</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-border p-3">
        {bottomNavigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
