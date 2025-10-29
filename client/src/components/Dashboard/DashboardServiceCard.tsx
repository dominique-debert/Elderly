import { Card, CardContent, CardHeader, CardTitle } from "@/components";

export function DashboardServiceCard() {
  return (
    <Card className="lg:w-full">
      <CardHeader>
        <CardTitle className="text-primary text-2xl">Services</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="stats">
          <div className="stat w-full">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
