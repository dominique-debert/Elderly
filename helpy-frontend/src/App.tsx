import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import HomePage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import Layout from './components/Layout';
import ActivityCategoriesPage from './pages/ActivityCategoriesPage';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
           <Route path="/activity-categories" element={<ActivityCategoriesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
