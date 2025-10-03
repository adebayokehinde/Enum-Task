import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const institutes = [
  {
    name: "Productive",
    location: "Lagos, Nigeria",
    dateJoined: "12, Jan 2021",
    status: "Active",
    pathways: 34,
    learners: 34,
    color: "bg-orange-500",
  },
  {
    name: "Semicolon Africa",
    location: "Nasarawa, Nigeria",
    dateJoined: "12, Jan 2021",
    status: "Suspended",
    pathways: 5,
    learners: 5,
    color: "bg-red-500",
  },
  {
    name: "Productive",
    location: "Maiduguri, Nigeria",
    dateJoined: "12, Jan 2021",
    status: "Pending",
    pathways: 3,
    learners: 3,
    color: "bg-orange-500",
  },
]

export function InstitutesTable() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent partner institutes</h2>
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
              <th className="pb-3">Institutes</th>
              <th className="pb-3">Date joined</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">No of pathways</th>
              <th className="pb-3">No of learners</th>
            </tr>
          </thead>
          <tbody>
            {institutes.map((institute, index) => (
              <tr key={index} className="border-b border-border last:border-0">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className={institute.color}>{institute.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{institute.name}</p>
                      <p className="text-sm text-muted-foreground">{institute.location}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-sm">{institute.dateJoined}</td>
                <td className="py-4">
                  <Badge
                    variant={
                      institute.status === "Active"
                        ? "default"
                        : institute.status === "Suspended"
                          ? "destructive"
                          : "secondary"
                    }
                    className={
                      institute.status === "Active"
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : institute.status === "Suspended"
                          ? "bg-red-100 text-red-700 hover:bg-red-100"
                          : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                    }
                  >
                    {institute.status}
                  </Badge>
                </td>
                <td className="py-4 text-sm">{institute.pathways}</td>
                <td className="py-4 text-sm">{institute.learners}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
