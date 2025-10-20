import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context";
import { Layout } from "@/components";

import {
  AdminPage,
  DashboardPage,
  LandingPage,
  LoginPage,
  PreferencesPage,
  SignupPage,
  WellnessPage,
} from "@/pages";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";

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
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPageRoute />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/admin-page" element={<AdminPage />} />
          <Route path="/wellness" element={<WellnessPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
