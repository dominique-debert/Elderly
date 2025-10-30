import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context";
import { Layout } from "@/components";

import {
  AdminPage,
  DashboardPage,
  LandingPage,
  LoginPage,
  ProfilePage,
  SignupPage,
  WellnessPage,
  MedicationPage,
  ForumPage,
  ObjectivesPage,
  ExplorePage,
  ActivitiesPage,
  MessagesPage,
  ExercisesPage,
  ProjectsPage,
} from "@/pages";
import "./App.css";

const LandingPageRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <LandingPage />
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPageRoute />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/admin-page" element={<AdminPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/exercises" element={<ExercisesPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/medications" element={<MedicationPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/objectives" element={<ObjectivesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/wellness" element={<WellnessPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
