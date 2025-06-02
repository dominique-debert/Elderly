import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores/auth";

import ActivityGoals from "@/components/ActivityGoals";
import AIAssistantCard from "@/components/AIAssistantCard";
import GeneralMetricsCard from "@/components/GeneralMetricsCard";
import HealthGoalsCard from "@/components/HealthGoalsCard";
import MealPlan from "@/components/MealPlan";
import MedicationPlanning from "@/components/MedicationPlanning";

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
        <MedicationPlanning />
      </div>
    </div>
  );
};

export default WellnessPage;
