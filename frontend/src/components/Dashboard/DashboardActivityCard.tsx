import { Card, CardContent, CardHeader, CardTitle } from "@/components";

export function DashboardActivityCard() {
  return (
    <>
      <Card className="lg:w-full bg-base-100 border border-base-200">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Activité</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="stats">
            <div className="stat">
              <div className="stat-figure text-primary"></div>
              <div className="stat-title">Total Likes</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
