import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AdminTabBar } from '../AdminTabBar';
import { ETabKey } from '@/@types/ETabKey';
import * as menuItemsService from '@/services/menuItems.service';

// Mock the menu items service
vi.mock('@/services/menuItems.service');

const mockMenuItems = [
  { id: '1', label: 'Activities', icon: 'activity', key: 'activity' },
  { id: '2', label: 'Badges', icon: 'badge', key: 'badge' },
  { id: '3', label: 'Forum', icon: 'forum', key: 'forum' },
];

describe('AdminTabBar Component', () => {
  let queryClient: QueryClient;
  let mockSetActiveTab: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
    mockSetActiveTab = vi.fn();
    vi.mocked(menuItemsService.fetchMenuItems).mockResolvedValue(mockMenuItems);
  });

  const renderWithQueryClient = (activeTab: ETabKey | null = null) => {
    return render(
      <QueryClientProvider client={queryClient}>
        <AdminTabBar activeTab={activeTab} setActiveTab={mockSetActiveTab} />
      </QueryClientProvider>
    );
  };

  it('renders loading state initially', () => {
    vi.mocked(menuItemsService.fetchMenuItems).mockImplementation(
      () => new Promise(() => {}) // Never resolves
    );

    renderWithQueryClient();
    expect(screen.getByText('Chargement...')).toBeInTheDocument();
  });

  it('renders error state when fetch fails', async () => {
    vi.mocked(menuItemsService.fetchMenuItems).mockRejectedValue(new Error('Fetch failed'));

    renderWithQueryClient();

    await waitFor(() => {
      expect(screen.getByText('Erreur lors du chargement du menu')).toBeInTheDocument();
    });
  });

  it('renders tabs when menu items are loaded', async () => {
    renderWithQueryClient();

    await waitFor(() => {
      expect(screen.getByText('Activities')).toBeInTheDocument();
      expect(screen.getByText('Badges')).toBeInTheDocument();
      expect(screen.getByText('Forum')).toBeInTheDocument();
    });
  });

  it('sets first tab as active when no active tab is provided', async () => {
    renderWithQueryClient();

    await waitFor(() => {
      expect(mockSetActiveTab).toHaveBeenCalledWith('activity');
    });
  });

  it('does not change active tab when one is already set', async () => {
    renderWithQueryClient(ETabKey.Badge);

    await waitFor(() => {
      expect(screen.getByText('Badges')).toBeInTheDocument();
    });

    // Should not call setActiveTab since activeTab is already set
    expect(mockSetActiveTab).not.toHaveBeenCalled();
  });

  it('renders tabs with correct active state', async () => {
    renderWithQueryClient(ETabKey.Badge);

    await waitFor(() => {
      expect(screen.getByText('Badges')).toBeInTheDocument();
    });

    const badgeTab = screen.getByRole('tab', { name: /badges/i });
    expect(badgeTab).toHaveAttribute('aria-selected', 'true');
    expect(badgeTab).toHaveAttribute('data-state', 'active');

    const activityTab = screen.getByRole('tab', { name: /activities/i });
    expect(activityTab).toHaveAttribute('aria-selected', 'false');
    expect(activityTab).toHaveAttribute('data-state', 'inactive');
  });

  it('uses shadcn/ui Tabs components', async () => {
    const { container } = renderWithQueryClient();

    await waitFor(() => {
      expect(screen.getByText('Activities')).toBeInTheDocument();
    });

    // Check if shadcn/ui classes are applied
    const tabsList = container.querySelector('[role="tablist"]');
    expect(tabsList).toBeInTheDocument();
    expect(tabsList).toHaveClass('grid');

    const tabTriggers = container.querySelectorAll('[role="tab"]');
    expect(tabTriggers).toHaveLength(3);
  });

  it('applies responsive grid classes', async () => {
    const { container } = renderWithQueryClient();

    await waitFor(() => {
      expect(screen.getByText('Activities')).toBeInTheDocument();
    });

    const tabsList = container.querySelector('[role="tablist"]');
    expect(tabsList).toHaveClass('grid-cols-2', 'lg:grid-cols-4', 'xl:grid-cols-7');
  });
});