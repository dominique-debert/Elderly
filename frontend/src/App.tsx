import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context";

import { Layout } from "@/components";

import {
  AdminPage,
  HomePage,
  LoginPage,
  ProfilePage,
  SignupPage,
  WellnessPage,
} from "@/pages";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
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
