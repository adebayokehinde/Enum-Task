"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", value: 65 },
  { month: "Feb", value: 68 },
  { month: "Mar", value: 70 },
  { month: "Apr", value: 72 },
  { month: "May", value: 75 },
  { month: "Jun", value: 78 },
  { month: "Jul", value: 80 },
  { month: "Aug", value: 82 },
  { month: "Sep", value: 83 },
  { month: "Oct", value: 84 },
  { month: "Nov", value: 85 },
  { month: "Dec", value: 86 },
]

export function CourseChart() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Course performance</h2>
          <p className="mt-1 text-sm text-muted-foreground">Introduction to UX Design</p>
        </div>
        <Button variant="ghost" size="sm" className="text-primary">
          Customize
        </Button>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <Tabs defaultValue="enrollment" className="w-auto">
          <TabsList>
            <TabsTrigger value="enrollment">Enrollment</TabsTrigger>
            <TabsTrigger value="progress">In progress</TabsTrigger>
            <TabsTrigger value="completion">Completion</TabsTrigger>
            <TabsTrigger value="complaints">Complaints</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            This year
          </Button>
          <Button variant="ghost" size="sm">
            This month
          </Button>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={{ stroke: "#e5e7eb" }} />
            <YAxis
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={{ stroke: "#e5e7eb" }}
              label={{ value: "Enrollment", angle: -90, position: "insideLeft", fill: "#6b7280", fontSize: 12 }}
            />
            <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
