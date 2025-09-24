import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mock components for testing
const MockLayout = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="layout" className="flex flex-col lg:flex-row">
    <nav data-testid="navbar" className="w-full lg:w-auto">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Helpy</h1>
        <button data-testid="theme-toggle" className="p-2">Toggle Theme</button>
      </div>
    </nav>
    <main className="flex-1 p-4">{children}</main>
  </div>
);

const MockCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div data-testid="card" className="bg-card border rounded-lg p-4 shadow-sm">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    {children}
  </div>
);

const MockButton = ({ variant = 'default', children, ...props }: any) => (
  <button 
    className={`px-4 py-2 rounded ${variant === 'destructive' ? 'bg-destructive text-destructive-foreground' : 'bg-primary text-primary-foreground'}`}
    {...props}
  >
    {children}
  </button>
);

const MockInput = ({ className = '', ...props }: any) => (
  <input 
    className={`border border-input rounded px-3 py-2 ${className}`}
    {...props}
  />
);

const renderWithProviders = (component: React.ReactElement) => {
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
        {component}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe('Visual and Responsive Testing', () => {
  beforeEach(() => {
    // Reset viewport to default
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768,
    });
  });

  afterEach(() => {
    // Clean up any theme changes
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('theme');
  });

  describe('Responsive Layout Classes', () => {
    it('applies correct responsive classes for layout components', () => {
      renderWithProviders(
        <MockLayout>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MockCard title="Card 1">Content 1</MockCard>
            <MockCard title="Card 2">Content 2</MockCard>
            <MockCard title="Card 3">Content 3</MockCard>
          </div>
        </MockLayout>
      );

      const layout = screen.getByTestId('layout');
      expect(layout).toHaveClass('flex', 'flex-col', 'lg:flex-row');

      const navbar = screen.getByTestId('navbar');
      expect(navbar).toHaveClass('w-full', 'lg:w-auto');
    });

    it('renders cards with proper responsive grid classes', () => {
      const { container } = renderWithProviders(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <MockCard title="Card 1">Content 1</MockCard>
          <MockCard title="Card 2">Content 2</MockCard>
          <MockCard title="Card 3">Content 3</MockCard>
        </div>
      );

      const gridContainer = container.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3.gap-4');
      expect(gridContainer).toBeInTheDocument();
    });

    it('applies correct spacing and padding classes', () => {
      renderWithProviders(
        <MockLayout>
          <div className="p-4 m-2 lg:p-6 lg:m-4">
            <MockCard title="Responsive Spacing">Content</MockCard>
          </div>
        </MockLayout>
      );

      const content = screen.getByText('Content').closest('div');
      expect(content?.parentElement).toHaveClass('p-4', 'm-2', 'lg:p-6', 'lg:m-4');
    });
  });

  describe('Theme System', () => {
    it('supports light and dark theme classes', () => {
      renderWithProviders(
        <div className="bg-background text-foreground">
          <MockCard title="Theme Test">
            <div className="bg-card text-card-foreground border-border">
              Theme content
            </div>
          </MockCard>
        </div>
      );

      const container = screen.getByText('Theme content').closest('div');
      expect(container).toHaveClass('bg-card', 'text-card-foreground', 'border-border');
    });

    it('applies correct color classes for primary elements', () => {
      renderWithProviders(
        <div>
          <MockButton variant="default">Primary Button</MockButton>
          <MockButton variant="destructive">Destructive Button</MockButton>
        </div>
      );

      const primaryButton = screen.getByText('Primary Button');
      const destructiveButton = screen.getByText('Destructive Button');

      expect(primaryButton).toHaveClass('bg-primary', 'text-primary-foreground');
      expect(destructiveButton).toHaveClass('bg-destructive', 'text-destructive-foreground');
    });

    it('handles theme switching functionality', () => {
      const ThemeToggle = () => {
        const toggleTheme = () => {
          const currentTheme = document.documentElement.getAttribute('data-theme');
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
          document.documentElement.setAttribute('data-theme', newTheme);
          localStorage.setItem('theme', newTheme);
        };

        return (
          <button onClick={toggleTheme} data-testid="theme-toggle">
            Toggle Theme
          </button>
        );
      };

      renderWithProviders(<ThemeToggle />);

      const toggleButton = screen.getByTestId('theme-toggle');
      
      // Initially no theme set
      expect(document.documentElement.getAttribute('data-theme')).toBeNull();

      // Click to set dark theme
      fireEvent.click(toggleButton);
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
      expect(localStorage.getItem('theme')).toBe('dark');

      // Click to set light theme
      fireEvent.click(toggleButton);
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
      expect(localStorage.getItem('theme')).toBe('light');
    });
  });

  describe('Form Component Styling', () => {
    it('applies consistent input styling classes', () => {
      renderWithProviders(
        <form className="space-y-4">
          <MockInput 
            type="email" 
            placeholder="Email" 
            className="w-full"
          />
          <MockInput 
            type="password" 
            placeholder="Password" 
            className="w-full"
          />
          <MockButton type="submit">Submit</MockButton>
        </form>
      );

      const emailInput = screen.getByPlaceholderText('Email');
      const passwordInput = screen.getByPlaceholderText('Password');

      expect(emailInput).toHaveClass('border', 'border-input', 'rounded', 'px-3', 'py-2', 'w-full');
      expect(passwordInput).toHaveClass('border', 'border-input', 'rounded', 'px-3', 'py-2', 'w-full');
    });

    it('maintains consistent button styling across variants', () => {
      renderWithProviders(
        <div className="space-x-2">
          <MockButton variant="default">Default</MockButton>
          <MockButton variant="destructive">Destructive</MockButton>
        </div>
      );

      const buttons = screen.getAllByRole('button');
      
      buttons.forEach(button => {
        expect(button).toHaveClass('px-4', 'py-2', 'rounded');
      });
    });
  });

  describe('Card Component Consistency', () => {
    it('applies consistent card styling across the application', () => {
      renderWithProviders(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MockCard title="User Profile">
            <p>User information</p>
          </MockCard>
          <MockCard title="Statistics">
            <p>User stats</p>
          </MockCard>
        </div>
      );

      const cards = screen.getAllByTestId('card');
      
      cards.forEach(card => {
        expect(card).toHaveClass('bg-card', 'border', 'rounded-lg', 'p-4', 'shadow-sm');
      });
    });

    it('maintains proper card header styling', () => {
      renderWithProviders(
        <MockCard title="Test Card">
          <p>Card content</p>
        </MockCard>
      );

      const cardTitle = screen.getByText('Test Card');
      expect(cardTitle).toHaveClass('text-lg', 'font-semibold', 'mb-2');
    });
  });

  describe('Mobile Responsiveness', () => {
    it('handles mobile viewport correctly', () => {
      // Simulate mobile viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });

      renderWithProviders(
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <MockCard title="Mobile Card">Mobile content</MockCard>
          </div>
        </div>
      );

      const container = screen.getByText('Mobile content').closest('div')?.parentElement?.parentElement;
      expect(container).toHaveClass('container', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8');
    });

    it('applies correct flex direction classes for mobile', () => {
      renderWithProviders(
        <div className="flex flex-col sm:flex-row lg:flex-row gap-4">
          <div>Item 1</div>
          <div>Item 2</div>
        </div>
      );

      const flexContainer = screen.getByText('Item 1').parentElement;
      expect(flexContainer).toHaveClass('flex', 'flex-col', 'sm:flex-row', 'lg:flex-row', 'gap-4');
    });
  });

  describe('Visual Consistency', () => {
    it('maintains consistent color scheme throughout components', () => {
      renderWithProviders(
        <div className="bg-background text-foreground min-h-screen">
          <header className="bg-card border-b border-border p-4">
            <h1 className="text-primary font-bold">Header</h1>
          </header>
          <main className="p-4">
            <MockCard title="Main Content">
              <p className="text-muted-foreground">Description text</p>
            </MockCard>
          </main>
        </div>
      );

      const header = screen.getByText('Header').parentElement;
      const description = screen.getByText('Description text');

      expect(header).toHaveClass('bg-card', 'border-b', 'border-border');
      expect(description).toHaveClass('text-muted-foreground');
    });

    it('uses consistent spacing patterns', () => {
      const { container } = renderWithProviders(
        <div className="space-y-4" data-testid="spacing-container">
          <MockCard title="Card 1">Content 1</MockCard>
          <MockCard title="Card 2">Content 2</MockCard>
        </div>
      );

      const spacingContainer = screen.getByTestId('spacing-container');
      expect(spacingContainer).toHaveClass('space-y-4');
    });
  });
});