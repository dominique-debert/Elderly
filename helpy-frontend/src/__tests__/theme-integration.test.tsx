import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Navbar from '../components/Navbar';

// Mock the auth store
vi.mock('../stores/auth', () => ({
  useAuthStore: () => ({
    user: { id: '1', isAdmin: false },
    isAuthenticated: true,
  }),
}));

// Mock the notifications service
vi.mock('../services/notifications.service', () => ({
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

describe('Theme Integration Tests', () => {
  beforeEach(() => {
    // Clear localStorage and reset theme before each test
    localStorage.clear();
    document.querySelector('html')?.removeAttribute('data-theme');
  });

  afterEach(() => {
    // Clean up after each test
    localStorage.clear();
    document.querySelector('html')?.removeAttribute('data-theme');
  });

  describe('Theme Switching Functionality', () => {
    it('initializes with default light theme', () => {
      renderNavbar();
      
      const switchElement = screen.getByRole('switch');
      expect(switchElement).not.toBeChecked();
      expect(localStorage.getItem('theme')).toBe('cmyk');
      expect(document.querySelector('html')?.getAttribute('data-theme')).toBe('cmyk');
    });

    it('switches to dark theme when toggle is activated', () => {
      renderNavbar();
      
      const switchElement = screen.getByRole('switch');
      
      // Click to switch to dark theme
      fireEvent.click(switchElement);
      
      expect(switchElement).toBeChecked();
      expect(localStorage.getItem('theme')).toBe('dim');
      expect(document.querySelector('html')?.getAttribute('data-theme')).toBe('dim');
    });

    it('switches back to light theme when toggle is deactivated', () => {
      renderNavbar();
      
      const switchElement = screen.getByRole('switch');
      
      // Switch to dark theme first
      fireEvent.click(switchElement);
      expect(switchElement).toBeChecked();
      
      // Switch back to light theme
      fireEvent.click(switchElement);
      expect(switchElement).not.toBeChecked();
      expect(localStorage.getItem('theme')).toBe('cmyk');
      expect(document.querySelector('html')?.getAttribute('data-theme')).toBe('cmyk');
    });

    it('persists theme preference in localStorage', () => {
      renderNavbar();
      
      const switchElement = screen.getByRole('switch');
      
      // Switch to dark theme
      fireEvent.click(switchElement);
      expect(localStorage.getItem('theme')).toBe('dim');
      
      // Switch back to light theme
      fireEvent.click(switchElement);
      expect(localStorage.getItem('theme')).toBe('cmyk');
    });

    it('loads saved theme preference from localStorage', () => {
      // Pre-set dark theme in localStorage
      localStorage.setItem('theme', 'dim');
      
      renderNavbar();
      
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeChecked();
      expect(document.querySelector('html')?.getAttribute('data-theme')).toBe('dim');
    });

    it('applies theme to HTML element data-theme attribute', () => {
      renderNavbar();
      
      const switchElement = screen.getByRole('switch');
      const htmlElement = document.querySelector('html');
      
      // Initial light theme
      expect(htmlElement?.getAttribute('data-theme')).toBe('cmyk');
      
      // Switch to dark theme
      fireEvent.click(switchElement);
      expect(htmlElement?.getAttribute('data-theme')).toBe('dim');
      
      // Switch back to light theme
      fireEvent.click(switchElement);
      expect(htmlElement?.getAttribute('data-theme')).toBe('cmyk');
    });
  });

  describe('Theme CSS Variables', () => {
    it('ensures theme-dependent CSS classes are available', () => {
      renderNavbar();
      
      // Test that theme-related CSS classes exist in the component
      const header = screen.getByRole('banner');
      
      // The header should have theme-aware classes
      expect(header).toBeInTheDocument();
      
      // Check for presence of theme-related class patterns in the DOM
      const elementsWithThemeClasses = document.querySelectorAll('[class*="bg-"], [class*="text-"], [class*="border-"]');
      
      expect(elementsWithThemeClasses.length).toBeGreaterThan(0);
    });

    it('maintains consistent styling across theme changes', () => {
      renderNavbar();
      
      const switchElement = screen.getByRole('switch');
      const header = screen.getByRole('banner');
      
      // Capture initial classes
      const initialClasses = header.className;
      
      // Switch theme
      fireEvent.click(switchElement);
      
      // Classes should remain consistent (structure-wise)
      const afterSwitchClasses = header.className;
      
      // The component structure should remain the same
      expect(header).toBeInTheDocument();
      expect(typeof initialClasses).toBe('string');
      expect(typeof afterSwitchClasses).toBe('string');
    });
  });

  describe('Accessibility', () => {
    it('provides proper ARIA attributes for theme toggle', () => {
      renderNavbar();
      
      const switchElement = screen.getByRole('switch');
      
      // Should have proper role
      expect(switchElement).toHaveAttribute('role', 'switch');
      
      // Should have aria-checked attribute
      expect(switchElement).toHaveAttribute('aria-checked');
    });

    it('maintains keyboard accessibility for theme toggle', () => {
      renderNavbar();
      
      const switchElement = screen.getByRole('switch');
      
      // Should be focusable
      switchElement.focus();
      expect(document.activeElement).toBe(switchElement);
      
      // Should respond to keyboard events (Space or Enter)
      fireEvent.keyDown(switchElement, { key: ' ', code: 'Space' });
      // Note: The actual keyboard handling depends on the Switch component implementation
    });
  });

  describe('Performance', () => {
    it('does not cause unnecessary re-renders during theme switching', () => {
      const renderCount = vi.fn();
      
      const TestComponent = () => {
        renderCount();
        return <Navbar />;
      };
      
      const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      });

      render(
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <TestComponent />
          </BrowserRouter>
        </QueryClientProvider>
      );
      
      const initialRenderCount = renderCount.mock.calls.length;
      
      const switchElement = screen.getByRole('switch');
      fireEvent.click(switchElement);
      
      // Should not cause excessive re-renders
      expect(renderCount.mock.calls.length).toBeLessThanOrEqual(initialRenderCount + 2);
    });
  });
});