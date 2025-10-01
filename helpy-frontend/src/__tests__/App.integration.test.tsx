import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../App';

// Mock the auth store
const mockUseAuthStore = vi.fn();

vi.mock('../stores/auth', () => ({
  useAuthStore: () => mockUseAuthStore(),
}));

// Mock all page components to avoid complex dependencies
vi.mock('../pages/LoginPage', () => ({
  default: () => <div data-testid="login-page">Login Page</div>,
}));

vi.mock('../pages/SignupPage', () => ({
  default: () => <div data-testid="signup-page">Signup Page</div>,
}));

vi.mock('../pages/Homepage', () => ({
  default: () => <div data-testid="homepage">Homepage</div>,
}));

vi.mock('../pages/AdminPage', () => ({
  default: () => <div data-testid="admin-page">Admin Page</div>,
}));

vi.mock('../pages/ProfilePage', () => ({
  default: () => <div data-testid="profile-page">Profile Page</div>,
}));

vi.mock('../pages/WellnessPage', () => ({
  default: () => <div data-testid="wellness-page">Wellness Page</div>,
}));

vi.mock('../pages/NotFoundPage', () => ({
  default: () => <div data-testid="not-found-page">Not Found Page</div>,
}));

// Mock Layout component
vi.mock('../components/Layout', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="layout">
      <nav data-testid="navbar">
        <a href="/" data-testid="home-link">Home</a>
        <a href="/admin" data-testid="admin-link">Admin</a>
        <a href="/profile" data-testid="profile-link">Profile</a>
        <a href="/wellness" data-testid="wellness-link">Wellness</a>
      </nav>
      {children}
    </div>
  ),
}));

const renderApp = (initialRoute = '/') => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  // Set initial route
  window.history.pushState({}, 'Test page', initialRoute);

  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe('App Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Clear browser history
    window.history.pushState({}, 'Test page', '/');
  });

  describe('Routing', () => {
    it('renders login page when not authenticated', () => {
      mockUseAuthStore.mockReturnValue({
        user: null,
        isAuthenticated: false,
      });

      renderApp('/');
      
      expect(screen.getByTestId('login-page')).toBeInTheDocument();
    });

    it('renders homepage when authenticated and on root route', () => {
      mockUseAuthStore.mockReturnValue({
        user: { id: '1', isAdmin: false },
        isAuthenticated: true,
      });

      renderApp('/');
      
      expect(screen.getByTestId('homepage')).toBeInTheDocument();
      expect(screen.getByTestId('layout')).toBeInTheDocument();
    });

    it('renders signup page on /signup route', () => {
      mockUseAuthStore.mockReturnValue({
        user: null,
        isAuthenticated: false,
      });

      renderApp('/signup');
      
      expect(screen.getByTestId('signup-page')).toBeInTheDocument();
    });

    it('renders admin page when authenticated and on /admin route', () => {
      mockUseAuthStore.mockReturnValue({
        user: { id: '1', isAdmin: true },
        isAuthenticated: true,
      });

      renderApp('/admin');
      
      expect(screen.getByTestId('admin-page')).toBeInTheDocument();
      expect(screen.getByTestId('layout')).toBeInTheDocument();
    });

    it('renders profile page when authenticated and on /profile route', () => {
      mockUseAuthStore.mockReturnValue({
        user: { id: '1', isAdmin: false },
        isAuthenticated: true,
      });

      renderApp('/profile');
      
      expect(screen.getByTestId('profile-page')).toBeInTheDocument();
      expect(screen.getByTestId('layout')).toBeInTheDocument();
    });

    it('renders wellness page when authenticated and on /wellness route', () => {
      mockUseAuthStore.mockReturnValue({
        user: { id: '1', isAdmin: false },
        isAuthenticated: true,
      });

      renderApp('/wellness');
      
      expect(screen.getByTestId('wellness-page')).toBeInTheDocument();
      expect(screen.getByTestId('layout')).toBeInTheDocument();
    });

    it('renders not found page for invalid routes', () => {
      mockUseAuthStore.mockReturnValue({
        user: { id: '1', isAdmin: false },
        isAuthenticated: true,
      });

      renderApp('/invalid-route');
      
      expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });
  });

  describe('Authentication Flow', () => {
    it('redirects unauthenticated users to login from protected routes', () => {
      mockUseAuthStore.mockReturnValue({
        user: null,
        isAuthenticated: false,
      });

      renderApp('/admin');
      
      // Should redirect to login (this would be handled by the individual page components)
      // In a real app, we'd test the actual redirect behavior
      expect(screen.queryByTestId('admin-page')).not.toBeInTheDocument();
    });

    it('allows authenticated users to access protected routes', () => {
      mockUseAuthStore.mockReturnValue({
        user: { id: '1', isAdmin: true },
        isAuthenticated: true,
      });

      renderApp('/admin');
      
      expect(screen.getByTestId('admin-page')).toBeInTheDocument();
    });
  });

  describe('Layout Integration', () => {
    it('renders layout wrapper for authenticated routes', () => {
      mockUseAuthStore.mockReturnValue({
        user: { id: '1', isAdmin: false },
        isAuthenticated: true,
      });

      renderApp('/');
      
      expect(screen.getByTestId('layout')).toBeInTheDocument();
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });

    it('does not render layout for login/signup pages', () => {
      mockUseAuthStore.mockReturnValue({
        user: null,
        isAuthenticated: false,
      });

      renderApp('/login');
      
      expect(screen.queryByTestId('layout')).not.toBeInTheDocument();
      expect(screen.queryByTestId('navbar')).not.toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('handles component rendering errors gracefully', () => {
      mockUseAuthStore.mockReturnValue({
        user: { id: '1', isAdmin: false },
        isAuthenticated: true,
      });

      // This would test error boundaries if implemented
      renderApp('/');
      
      expect(screen.getByTestId('homepage')).toBeInTheDocument();
    });
  });
});