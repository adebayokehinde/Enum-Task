"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, CalendarCheck } from "lucide-react"
import { useState } from "react"

const notifications = [
  {
    title: "Semicolon Africa",
    description: "Created a cohort",
    date: "Jan 12, 2023",
    color: "bg-red-500",
  },
  {
    title: "Productive",
    description: "Sent on 12 May 2025",
    date: "Feb 12, 2023",
    color: "bg-orange-500",
  },
  {
    title: "Semicolon Africa",
    description: "Created a program",
    date: "Mar 12, 2023",
    color: "bg-red-500",
  },
  {
    title: "Semicolon Africa",
    description: "Created a course",
    date: "May 12, 2023",
    color: "bg-red-500",
  },
]

const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sat", "Su"]
const calendarDays = [
  [28, 27, 28, 29, 30, 31, 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
  [30, 31, 1, 2, 3, 4, 5],
]

export function NotificationsSidebar() {
  const [currentMonth] = useState("February 2022")

  return (
    <div className="w-80 space-y-6 border-l border-border bg-card p-6">
      {/* Notifications */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold">Recent notifications</h3>
          <Button variant="link" size="sm" className="text-primary">
            View all
          </Button>
        </div>
        <div className="space-y-3">
          {notifications.map((notification, index) => (
            <div key={index} className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className={notification.color}>{notification.title.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{notification.title}</p>
                <p className="text-xs text-muted-foreground">{notification.description}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <Card className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold">{currentMonth}</h3>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-muted-foreground">
            {daysOfWeek.map((day) => (
              <div key={day} className="py-1">
                {day}
              </div>
            ))}
          </div>
          <div className="space-y-1">
            {calendarDays.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 gap-1">
                {week.map((day, dayIndex) => {
                  const isCurrentMonth = !((weekIndex === 0 && day > 20) || (weekIndex === 5 && day < 10))
                  const isSelected = day === 6 && weekIndex === 1
                  return (
                    <button
                      key={dayIndex}
                      className={`aspect-square rounded-lg text-sm transition-colors ${
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : isCurrentMonth
                            ? "hover:bg-secondary"
                            : "text-muted-foreground"
                      }`}
                    >
                      {day}
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 py-4">
          <div className="rounded-full bg-muted p-4">
            <CalendarCheck className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-center text-sm text-muted-foreground">There are no activities for today</p>
        </div>
      </Card>
    </div>
  )
}
