import { Card } from "@/components/ui/card"

export function StatsCard({ title, value, icon }) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-2 text-3xl font-bold">{value}</p>
        </div>
        <div className="rounded-lg p-3">{icon}</div>
      </div>
    </Card>
  )
}
