import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context";
import { SidebarProvider } from "@/context/SidebarContext";
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
  DiscussionsPage,
  CategoriesPage,
  NotificationsPage,
  DiscoveryPage,
  ModerationPage,
} from "@/pages";
import "./App.css";
import { BookmarksPage } from "./pages/Forum/BookmarksPage";

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
        <SidebarProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<LandingPageRoute />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/admin-page" element={<AdminPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/exercises" element={<ExercisesPage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/forum/home" element={<ForumPage />} />
              <Route path="/forum/bookmarks" element={<BookmarksPage />} />
              <Route path="/forum/categories" element={<CategoriesPage />} />
              <Route path="/forum/discover" element={<DiscoveryPage />} />
              <Route path="/forum/discussions" element={<DiscussionsPage />} />
              <Route path="/forum/moderation" element={<ModerationPage />} />
              <Route
                path="/forum/notifications"
                element={<NotificationsPage />}
              />
              <Route path="/medications" element={<MedicationPage />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/objectives" element={<ObjectivesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/wellness" element={<WellnessPage />} />
            </Route>
          </Routes>
        </SidebarProvider>
      </AuthProvider>
    </>
  );
};

export default App;
