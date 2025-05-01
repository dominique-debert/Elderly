import AIAssistantCard from "../components/AIAssistantCard";
import HealthGoalsCard from "../components/HealthGoalsCard";
import GeneralMetricsCard from "../components/GeneralMetricsCard";
import MedicationPlanning from "../components/MedicationPlanning";
import { useAuthStore } from "../stores/auth";
import { Navigate } from "react-router-dom";
import ActivityGoals from "../components/ActivityGoals";
import MealPlan from "../components/MealPlan";

const WellnessPage = () => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col m-4 lg:ml-0 w-full space-y-8">
      <div className="flex flex-col lg:flex-row w-full lg:space-x-4">
        <AIAssistantCard />
        <GeneralMetricsCard />
        <HealthGoalsCard />
      </div>
      
      <div className="flex flex-col lg:flex-row w-full lg:space-x-4">
        <ActivityGoals />
        <MealPlan />
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:space-x-4">
        <MedicationPlanning />
      </div>
    </div>
  );
};

export default WellnessPage;