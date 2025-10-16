import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";

import {
  // ActivityGoals,
  AIAssistantCard,
  GeneralMetricsCard,
  HealthGoalsCard,
  MealPlan,
  MedicationPlanner,
} from "@/components/";

export function WellnessPage() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col m-4 lg:ml-0 w-full">
      <div className="flex flex-col lg:flex-row w-full">
        <AIAssistantCard />
        <GeneralMetricsCard />
        <HealthGoalsCard />
      </div>

      <div className="flex flex-col lg:flex-row w-full">
        {/* <ActivityGoals /> */}
        <MealPlan />
      </div>

      <div className="flex flex-col lg:flex-row w-full">
        <MedicationPlanner />
      </div>
    </div>
  );
}
