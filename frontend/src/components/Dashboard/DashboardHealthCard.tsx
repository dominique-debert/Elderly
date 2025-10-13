import { Card, CardContent, CardHeader, CardTitle } from "@/components";

export function DashboardHealthCard() {
  return (
    <Card className="lg:w-full border border-base-200">
      <CardHeader>
        <CardTitle className="text-primary text-2xl">Santé</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
