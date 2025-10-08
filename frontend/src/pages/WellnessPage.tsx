import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";

import { ActivityGoals } from "@/components/";
import { AIAssistantCard } from "@/components";
import { GeneralMetricsCard } from "@/components";
import { HealthGoalsCard } from "@/components";
import { MealPlan } from "@/components";
import { MedicationPlanner } from "@/components";

const WellnessPage = () => {
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
        <ActivityGoals />
        <MealPlan />
      </div>

      <div className="flex flex-col lg:flex-row w-full">
        <MedicationPlanner />
      </div>
    </div>
  );
};

export default WellnessPage;
