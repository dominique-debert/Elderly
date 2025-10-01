import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Homepage from '../Homepage';

// Mock the auth store
const mockUseAuthStore = vi.fn();

vi.mock('../../stores/auth', () => ({
  useAuthStore: () => mockUseAuthStore(),
}));

// Mock all the card components
vi.mock('../../components/ActivityDashboardCard', () => ({
  default: () => <div data-testid="activity-card">Activity Card</div>,
}));

vi.mock('../../components/ForumCard', () => ({
  default: () => <div data-testid="forum-card">Forum Card</div>,
}));

vi.mock('../../components/HealthCard', () => ({
  default: () => <div data-testid="health-card">Health Card</div>,
}));

vi.mock('../../components/UserCard', () => ({
  default: () => <div data-testid="user-card">User Card</div>,
}));

vi.mock('../../components/ServiceCard', () => ({
  default: () => <div data-testid="service-card">Service Card</div>,
}));

vi.mock('../../components/MedicationCard', () => ({
  default: () => <div data-testid="medication-card">Medication Card</div>,
}));

vi.mock('../../components/MeteoWidget', () => ({
  MeteoWidget: () => <div data-testid="meteo-widget">Meteo Widget</div>,
}));

const renderHomepage = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe('Homepage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all dashboard cards when user is authenticated', () => {
    mockUseAuthStore.mockReturnValue({
      user: { id: '1', name: 'Test User' },
      isAuthenticated: true,
    });

    renderHomepage();
    
    expect(screen.getByTestId('user-card')).toBeInTheDocument();
    expect(screen.getByTestId('meteo-widget')).toBeInTheDocument();
    expect(screen.getByTestId('forum-card')).toBeInTheDocument();
    expect(screen.getByTestId('activity-card')).toBeInTheDocument();
    expect(screen.getByTestId('health-card')).toBeInTheDocument();
    expect(screen.getByTestId('service-card')).toBeInTheDocument();
    expect(screen.getByTestId('medication-card')).toBeInTheDocument();
  });

  it('shows error message when user is authenticated but user data is missing', () => {
    mockUseAuthStore.mockReturnValue({
      user: null,
      isAuthenticated: true,
    });

    renderHomepage();
    
    expect(screen.getByText('Les informations de profil sont introuvables.')).toBeInTheDocument();
    expect(screen.getByTestId('forum-card')).toBeInTheDocument();
    expect(screen.getByTestId('activity-card')).toBeInTheDocument();
    expect(screen.getByTestId('health-card')).toBeInTheDocument();
    expect(screen.getByTestId('service-card')).toBeInTheDocument();
    expect(screen.getByTestId('medication-card')).toBeInTheDocument();
  });

  it('redirects when user is not authenticated', () => {
    mockUseAuthStore.mockReturnValue({
      user: null,
      isAuthenticated: false,
    });

    renderHomepage();
    
    // Should redirect to login page - we can't test the actual redirect in this setup
    // but we can verify the component behavior
    expect(screen.queryByTestId('user-card')).not.toBeInTheDocument();
  });

  it('has proper layout structure with responsive classes', () => {
    mockUseAuthStore.mockReturnValue({
      user: { id: '1', name: 'Test User' },
      isAuthenticated: true,
    });

    const { container } = renderHomepage();
    
    // Check for main container classes
    const mainContainer = container.querySelector('.flex.flex-col.w-full.gap-4');
    expect(mainContainer).toBeInTheDocument();
    
    // Check for responsive layout classes
    const responsiveContainers = container.querySelectorAll('.lg\\:flex.lg\\:flex-row.gap-4');
    expect(responsiveContainers.length).toBeGreaterThan(0);
  });

  it('renders cards in correct layout sections', () => {
    mockUseAuthStore.mockReturnValue({
      user: { id: '1', name: 'Test User' },
      isAuthenticated: true,
    });

    renderHomepage();
    
    // All cards should be present
    expect(screen.getByTestId('user-card')).toBeInTheDocument();
    expect(screen.getByTestId('meteo-widget')).toBeInTheDocument();
    expect(screen.getByTestId('forum-card')).toBeInTheDocument();
    expect(screen.getByTestId('activity-card')).toBeInTheDocument();
    expect(screen.getByTestId('health-card')).toBeInTheDocument();
    expect(screen.getByTestId('service-card')).toBeInTheDocument();
    expect(screen.getByTestId('medication-card')).toBeInTheDocument();
  });
});