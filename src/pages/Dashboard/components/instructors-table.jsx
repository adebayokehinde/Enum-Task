import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const instructors = [
  {
    name: "Adewale Michael",
    organization: "Semicolon Africa",
    dateJoined: "12, Jan 2021",
    status: "Active",
    email: "Adewale@gmail.com",
    courses: 24,
  },
  {
    name: "Ashley Immanuel",
    organization: "Product dive",
    dateJoined: "12, Jan 2021",
    status: "Suspended",
    email: "Adewale@gmail.com",
    courses: 24,
  },
  {
    name: "Ashley Immanuel",
    organization: "Product dive",
    dateJoined: "12, Jan 2021",
    status: "Active",
    email: "Adewale@gmail.com",
    courses: 24,
  },
]

export function InstructorsTable() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Instructors</h2>
        <Button variant="link" className="text-primary">
          View all
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All(123)</TabsTrigger>
          <TabsTrigger value="active">Active(23)</TabsTrigger>
          <TabsTrigger value="suspended">Suspended(12)</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border text-left text-sm font-medium text-muted-foreground">
              <th className="pb-3">Name</th>
              <th className="pb-3">Date joined</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Email</th>
              <th className="pb-3">Active courses</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor, index) => (
              <tr key={index} className="border-b border-border last:border-0">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-muted">
                        {instructor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{instructor.name}</p>
                      <p className="text-sm text-muted-foreground">{instructor.organization}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-sm">{instructor.dateJoined}</td>
                <td className="py-4">
                  <Badge
                    variant={instructor.status === "Active" ? "default" : "destructive"}
                    className={
                      instructor.status === "Active"
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : "bg-red-100 text-red-700 hover:bg-red-100"
                    }
                  >
                    {instructor.status}
                  </Badge>
                </td>
                <td className="py-4 text-sm">{instructor.email}</td>
                <td className="py-4 text-sm">{instructor.courses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
