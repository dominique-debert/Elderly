import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import AdminPage from '../AdminPage';
import { ETabKey } from '../../@types/ETabKey';

// Mock the auth store
const mockUseAuthStore = vi.fn();

vi.mock('../../stores/auth', () => ({
  useAuthStore: () => mockUseAuthStore(),
}));

// Mock all the list components
vi.mock('../../components/AdminTabBar', () => ({
  AdminTabBar: ({ activeTab, setActiveTab }: { activeTab: ETabKey | null, setActiveTab: (tab: ETabKey) => void }) => (
    <div data-testid="admin-tab-bar">
      <button onClick={() => setActiveTab(ETabKey.Mood)} data-testid="mood-tab">Mood</button>
      <button onClick={() => setActiveTab(ETabKey.Activity)} data-testid="activity-tab">Activity</button>
      <button onClick={() => setActiveTab(ETabKey.Badge)} data-testid="badge-tab">Badge</button>
    </div>
  ),
}));

vi.mock('../../components/ActivityCategories/ActivityList', () => ({
  ActivityList: () => <div data-testid="activity-list">Activity List</div>,
}));

vi.mock('../../components/BadgeCategories/BadgeList', () => ({
  BadgeList: () => <div data-testid="badge-list">Badge List</div>,
}));

vi.mock('../../components/CognitiveCategories/CognitionList', () => ({
  CognitiveList: () => <div data-testid="cognitive-list">Cognitive List</div>,
}));

vi.mock('../../components/ForumCategories/ForumList', () => ({
  ForumList: () => <div data-testid="forum-list">Forum List</div>,
}));

vi.mock('../../components/HelpCategory/HelpList', () => ({
  HelpList: () => <div data-testid="help-list">Help List</div>,
}));

vi.mock('../../components/MoodCategories/MoodList', () => ({
  MoodList: () => <div data-testid="mood-list">Mood List</div>,
}));

vi.mock('../../components/NutritionCategories/NutritionList', () => ({
  NutritionList: () => <div data-testid="nutrition-list">Nutrition List</div>,
}));

vi.mock('../../components/ProgramCategories/ProgramList', () => ({
  ProgramList: () => <div data-testid="program-list">Program List</div>,
}));

vi.mock('../../components/ProjectCategories/ProjectList', () => ({
  ProjectList: () => <div data-testid="project-list">Project List</div>,
}));

vi.mock('../../components/ResourceCategories/ResourceList', () => ({
  ResourceList: () => <div data-testid="resource-list">Resource List</div>,
}));

vi.mock('../../components/ServiceCategories/ServiceList', () => ({
  ServiceList: () => <div data-testid="service-list">Service List</div>,
}));

vi.mock('../../components/SkillCategories/SkillList', () => ({
  SkillList: () => <div data-testid="skill-list">Skill List</div>,
}));

vi.mock('../../components/UrbanIssueCategories/UrbanIssueList', () => ({
  UrbanIssueList: () => <div data-testid="urban-issue-list">Urban Issue List</div>,
}));

vi.mock('../../components/WellnessCategories/WellnessList', () => ({
  WellnessList: () => <div data-testid="wellness-list">Wellness List</div>,
}));

const renderAdminPage = () => {
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
        <AdminPage />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe('AdminPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders admin interface when user is authenticated and is admin', () => {
    mockUseAuthStore.mockReturnValue({
      user: { id: '1', isAdmin: true },
      isAuthenticated: true,
    });

    renderAdminPage();
    
    expect(screen.getByText('Administration')).toBeInTheDocument();
    expect(screen.getByTestId('admin-tab-bar')).toBeInTheDocument();
    expect(screen.getByTestId('mood-list')).toBeInTheDocument(); // Default active tab
  });

  it('shows access denied message when user is not admin', () => {
    mockUseAuthStore.mockReturnValue({
      user: { id: '1', isAdmin: false },
      isAuthenticated: true,
    });

    renderAdminPage();
    
    expect(screen.getByText("Vous n'avez pas les droits d'administrateurs.")).toBeInTheDocument();
    expect(screen.queryByText('Administration')).not.toBeInTheDocument();
  });

  it('redirects when user is not authenticated', () => {
    mockUseAuthStore.mockReturnValue({
      user: null,
      isAuthenticated: false,
    });

    renderAdminPage();
    
    // Should redirect to login page
    expect(screen.queryByText('Administration')).not.toBeInTheDocument();
  });

  it('switches between different tab contents', () => {
    mockUseAuthStore.mockReturnValue({
      user: { id: '1', isAdmin: true },
      isAuthenticated: true,
    });

    renderAdminPage();
    
    // Default should show mood list
    expect(screen.getByTestId('mood-list')).toBeInTheDocument();
    
    // Click activity tab
    fireEvent.click(screen.getByTestId('activity-tab'));
    expect(screen.getByTestId('activity-list')).toBeInTheDocument();
    expect(screen.queryByTestId('mood-list')).not.toBeInTheDocument();
    
    // Click badge tab
    fireEvent.click(screen.getByTestId('badge-tab'));
    expect(screen.getByTestId('badge-list')).toBeInTheDocument();
    expect(screen.queryByTestId('activity-list')).not.toBeInTheDocument();
  });

  it('has proper layout structure with sticky header', () => {
    mockUseAuthStore.mockReturnValue({
      user: { id: '1', isAdmin: true },
      isAuthenticated: true,
    });

    const { container } = renderAdminPage();
    
    // Check for main container classes
    const mainContainer = container.querySelector('.w-full.h-full.px-4.pb-4.overflow-y-auto.no-scrollbar');
    expect(mainContainer).toBeInTheDocument();
    
    // Check for sticky header
    const stickyHeader = container.querySelector('.bg-background.sticky.top-0.z-30.pb-4.pt-4');
    expect(stickyHeader).toBeInTheDocument();
  });

  it('renders administration title with proper styling', () => {
    mockUseAuthStore.mockReturnValue({
      user: { id: '1', isAdmin: true },
      isAuthenticated: true,
    });

    renderAdminPage();
    
    const title = screen.getByText('Administration');
    expect(title).toHaveClass('text-2xl', 'font-semibold', 'text-primary', 'border-b', 'border-border', 'mb-4');
  });
});