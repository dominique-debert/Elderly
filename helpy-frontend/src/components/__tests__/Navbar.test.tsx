import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Navbar from '../Navbar';

// Mock the auth store
vi.mock('../../stores/auth', () => ({
  useAuthStore: () => ({
    user: { id: '1', isAdmin: false },
    isAuthenticated: true,
  }),
}));

// Mock the notifications service
vi.mock('../../services/notifications.service', () => ({
  fetchNotificationsByUserId: vi.fn().mockResolvedValue([]),
}));

// Mock react-query
vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual('@tanstack/react-query');
  return {
    ...actual,
    useQuery: () => ({
      data: [],
      isLoading: false,
      isError: false,
    }),
  };
});

const renderNavbar = () => {
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
        <Navbar />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe('Navbar Switch Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Reset document theme
    document.querySelector('html')?.removeAttribute('data-theme');
  });

  it('should render the theme switch component', () => {
    renderNavbar();
    
    // Check if the switch is rendered
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeInTheDocument();
  });

  it('should toggle theme when switch is clicked', () => {
    renderNavbar();
    
    const switchElement = screen.getByRole('switch');
    
    // Initially should be unchecked (light theme)
    expect(switchElement).not.toBeChecked();
    expect(localStorage.getItem('theme')).toBe('cmyk');
    
    // Click the switch to toggle to dark theme
    fireEvent.click(switchElement);
    
    // Should now be checked (dark theme)
    expect(switchElement).toBeChecked();
    expect(localStorage.getItem('theme')).toBe('dim');
  });

  it('should set the correct data-theme attribute on html element', () => {
    renderNavbar();
    
    const switchElement = screen.getByRole('switch');
    const htmlElement = document.querySelector('html');
    
    // Initially should have light theme
    expect(htmlElement?.getAttribute('data-theme')).toBe('cmyk');
    
    // Toggle to dark theme
    fireEvent.click(switchElement);
    
    // Should now have dark theme
    expect(htmlElement?.getAttribute('data-theme')).toBe('dim');
  });

  it('should preserve theme from localStorage on initial load', () => {
    // Set dark theme in localStorage before rendering
    localStorage.setItem('theme', 'dim');
    
    renderNavbar();
    
    const switchElement = screen.getByRole('switch');
    
    // Switch should be checked since we set dark theme
    expect(switchElement).toBeChecked();
    expect(localStorage.getItem('theme')).toBe('dim');
  });
});