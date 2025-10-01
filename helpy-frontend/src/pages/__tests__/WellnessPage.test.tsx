import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import WellnessPage from '../WellnessPage';

// Mock the auth store
const mockUseAuthStore = vi.fn();

vi.mock('../../stores/auth', () => ({
  useAuthStore: () => mockUseAuthStore(),
}));

// Mock all the wellness components
vi.mock('../../components/ActivityGoals', () => ({
  default: () => <div data-testid="activity-goals">Activity Goals</div>,
}));

vi.mock('../../components/AIAssistantCard', () => ({
  default: () => <div data-testid="ai-assistant-card">AI Assistant Card</div>,
}));

vi.mock('../../components/GeneralMetricsCard', () => ({
  default: () => <div data-testid="general-metrics-card">General Metrics Card</div>,
}));

vi.mock('../../components/HealthGoalsCard', () => ({
  default: () => <div data-testid="health-goals-card">Health Goals Card</div>,
}));

vi.mock('../../components/MealPlan', () => ({
  default: () => <div data-testid="meal-plan">Meal Plan</div>,
}));

vi.mock('../../components/MedicationPlanning', () => ({
  default: () => <div data-testid="medication-planning">Medication Planning</div>,
}));

const renderWellnessPage = () => {
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
        <WellnessPage />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe('WellnessPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all wellness components when user is authenticated', () => {
    mockUseAuthStore.mockReturnValue({
      isAuthenticated: true,
    });

    renderWellnessPage();
    
    expect(screen.getByTestId('ai-assistant-card')).toBeInTheDocument();
    expect(screen.getByTestId('general-metrics-card')).toBeInTheDocument();
    expect(screen.getByTestId('health-goals-card')).toBeInTheDocument();
    expect(screen.getByTestId('activity-goals')).toBeInTheDocument();
    expect(screen.getByTestId('meal-plan')).toBeInTheDocument();
    expect(screen.getByTestId('medication-planning')).toBeInTheDocument();
  });

  it('redirects when user is not authenticated', () => {
    mockUseAuthStore.mockReturnValue({
      isAuthenticated: false,
    });

    renderWellnessPage();
    
    // Should redirect to login page
    expect(screen.queryByTestId('ai-assistant-card')).not.toBeInTheDocument();
    expect(screen.queryByTestId('general-metrics-card')).not.toBeInTheDocument();
    expect(screen.queryByTestId('health-goals-card')).not.toBeInTheDocument();
    expect(screen.queryByTestId('activity-goals')).not.toBeInTheDocument();
    expect(screen.queryByTestId('meal-plan')).not.toBeInTheDocument();
    expect(screen.queryByTestId('medication-planning')).not.toBeInTheDocument();
  });

  it('has proper responsive layout structure', () => {
    mockUseAuthStore.mockReturnValue({
      isAuthenticated: true,
    });

    const { container } = renderWellnessPage();
    
    // Check for main container classes
    const mainContainer = container.querySelector('.flex.flex-col.m-4.lg\\:ml-0.w-full');
    expect(mainContainer).toBeInTheDocument();
    
    // Check for responsive layout containers
    const responsiveContainers = container.querySelectorAll('.flex.flex-col.lg\\:flex-row.w-full');
    expect(responsiveContainers.length).toBe(3); // Three rows of components
  });

  it('organizes components in correct layout sections', () => {
    mockUseAuthStore.mockReturnValue({
      isAuthenticated: true,
    });

    renderWellnessPage();
    
    // First row: AI Assistant, General Metrics, Health Goals
    expect(screen.getByTestId('ai-assistant-card')).toBeInTheDocument();
    expect(screen.getByTestId('general-metrics-card')).toBeInTheDocument();
    expect(screen.getByTestId('health-goals-card')).toBeInTheDocument();
    
    // Second row: Activity Goals, Meal Plan
    expect(screen.getByTestId('activity-goals')).toBeInTheDocument();
    expect(screen.getByTestId('meal-plan')).toBeInTheDocument();
    
    // Third row: Medication Planning
    expect(screen.getByTestId('medication-planning')).toBeInTheDocument();
  });

  it('renders all components without errors', () => {
    mockUseAuthStore.mockReturnValue({
      isAuthenticated: true,
    });

    const { container } = renderWellnessPage();
    
    // Verify no error boundaries or error messages are rendered
    expect(container.textContent).not.toContain('Error');
    expect(container.textContent).not.toContain('Something went wrong');
    
    // Verify all expected components are present
    expect(screen.getByTestId('ai-assistant-card')).toBeInTheDocument();
    expect(screen.getByTestId('general-metrics-card')).toBeInTheDocument();
    expect(screen.getByTestId('health-goals-card')).toBeInTheDocument();
    expect(screen.getByTestId('activity-goals')).toBeInTheDocument();
    expect(screen.getByTestId('meal-plan')).toBeInTheDocument();
    expect(screen.getByTestId('medication-planning')).toBeInTheDocument();
  });
});