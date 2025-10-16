import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context";
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

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/admin-page" element={<AdminPage />} />
          <Route path="/wellness" element={<WellnessPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/preferences" element={<PreferencesPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
