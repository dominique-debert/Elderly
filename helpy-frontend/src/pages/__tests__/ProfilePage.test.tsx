import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ProfilePage from '../ProfilePage';

// Mock the auth store
const mockUseAuthStore = vi.fn();

vi.mock('../../stores/auth', () => ({
  useAuthStore: () => mockUseAuthStore(),
}));

// Mock the formatDate utility
vi.mock('../../utils/formatDate', () => ({
  formatDate: (date: string) => `Formatted: ${date}`,
}));

const renderProfilePage = () => {
  return render(
    <BrowserRouter>
      <ProfilePage />
    </BrowserRouter>
  );
};

describe('ProfilePage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders profile information when user is authenticated', () => {
    const mockUser = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      birthDate: '1990-01-01',
      avatar: 'avatar.png',
    };

    mockUseAuthStore.mockReturnValue({
      user: mockUser,
      isAuthenticated: true,
    });

    renderProfilePage();
    
    expect(screen.getByText('Bienvenue sur votre profil')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText('Formatted: 1990-01-01')).toBeInTheDocument();
  });

  it('renders user avatar with correct src and alt attributes', () => {
    const mockUser = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      birthDate: '1990-01-01',
      avatar: 'avatar.png',
    };

    mockUseAuthStore.mockReturnValue({
      user: mockUser,
      isAuthenticated: true,
    });

    renderProfilePage();
    
    const avatar = screen.getByRole('img', { name: 'Admin' });
    expect(avatar).toHaveAttribute('src', '/images/avatar.png');
    expect(avatar).toHaveAttribute('alt', 'Admin');
  });

  it('shows "Non disponible" when birthDate is not provided', () => {
    const mockUser = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      birthDate: null,
      avatar: 'avatar.png',
    };

    mockUseAuthStore.mockReturnValue({
      user: mockUser,
      isAuthenticated: true,
    });

    renderProfilePage();
    
    expect(screen.getByText('Non disponible')).toBeInTheDocument();
  });

  it('shows error message when user data is not available', () => {
    mockUseAuthStore.mockReturnValue({
      user: null,
      isAuthenticated: true,
    });

    renderProfilePage();
    
    expect(screen.getByText('Les informations de profil sont introuvables.')).toBeInTheDocument();
    expect(screen.queryByText('Bienvenue sur votre profil')).not.toBeInTheDocument();
  });

  it('redirects when user is not authenticated', () => {
    mockUseAuthStore.mockReturnValue({
      user: null,
      isAuthenticated: false,
    });

    renderProfilePage();
    
    // Should redirect to login page
    expect(screen.queryByText('Bienvenue sur votre profil')).not.toBeInTheDocument();
  });

  it('has proper layout structure and styling classes', () => {
    const mockUser = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      birthDate: '1990-01-01',
      avatar: 'avatar.png',
    };

    mockUseAuthStore.mockReturnValue({
      user: mockUser,
      isAuthenticated: true,
    });

    const { container } = renderProfilePage();
    
    // Check for main container classes
    const mainContainer = container.querySelector('.profile-container.p-10.w-full.h-100.bg-background');
    expect(mainContainer).toBeInTheDocument();
  });

  it('renders card with proper shadcn/ui structure', () => {
    const mockUser = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      birthDate: '1990-01-01',
      avatar: 'avatar.png',
    };

    mockUseAuthStore.mockReturnValue({
      user: mockUser,
      isAuthenticated: true,
    });

    renderProfilePage();
    
    // Check that the card structure is rendered (shadcn/ui Card components)
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
  });

  it('renders title with correct styling classes', () => {
    const mockUser = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      birthDate: '1990-01-01',
      avatar: 'avatar.png',
    };

    mockUseAuthStore.mockReturnValue({
      user: mockUser,
      isAuthenticated: true,
    });

    renderProfilePage();
    
    const title = screen.getByText('Bienvenue sur votre profil');
    expect(title).toHaveClass('text-2xl', 'font-semibold', 'text-primary', 'mb-4');
  });
});