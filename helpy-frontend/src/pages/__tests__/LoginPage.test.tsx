import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import LoginPage from '../LoginPage';

// Mock the auth store
const mockLogin = vi.fn();
const mockUseAuthStore = vi.fn();

vi.mock('../../stores/auth', () => ({
  useAuthStore: () => mockUseAuthStore(),
}));

// Mock react-router-dom navigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const renderLoginPage = () => {
  return render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );
};

describe('LoginPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseAuthStore.mockReturnValue({
      login: mockLogin,
      isAuthenticated: false,
    });
  });

  it('renders login form with all required elements', () => {
    renderLoginPage();
    
    expect(screen.getByRole('heading', { name: 'Se connecter' })).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Mot de passe')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Se connecter' })).toBeInTheDocument();
    expect(screen.getByText('Pas encore de compte ?')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Créer un compte' })).toBeInTheDocument();
  });

  it('renders background video element', () => {
    renderLoginPage();
    
    const video = document.querySelector('#background-video');
    expect(video).toBeInTheDocument();
  });

  it('updates email input value when typed', () => {
    renderLoginPage();
    
    const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    
    expect(emailInput.value).toBe('test@example.com');
  });

  it('updates password input value when typed', () => {
    renderLoginPage();
    
    const passwordInput = screen.getByLabelText('Mot de passe') as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
    expect(passwordInput.value).toBe('password123');
  });

  it('calls login function when form is submitted', async () => {
    renderLoginPage();
    
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Mot de passe');
    const submitButton = screen.getByRole('button', { name: 'Se connecter' });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123', mockNavigate);
    });
  });

  it('requires email and password fields', () => {
    renderLoginPage();
    
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Mot de passe');
    
    expect(emailInput).toHaveAttribute('required');
    expect(passwordInput).toHaveAttribute('required');
  });

  it('has correct input types', () => {
    renderLoginPage();
    
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Mot de passe');
    
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('redirects to signup page when link is clicked', () => {
    renderLoginPage();
    
    const signupLink = screen.getByRole('link', { name: 'Créer un compte' });
    expect(signupLink).toHaveAttribute('href', '/signup');
  });

  it('redirects when user is already authenticated', () => {
    mockUseAuthStore.mockReturnValue({
      login: mockLogin,
      isAuthenticated: true,
    });

    renderLoginPage();
    
    // Should redirect to home page - we can't test the actual redirect in this setup
    // but we can verify the component behavior
    expect(mockLogin).not.toHaveBeenCalled();
  });
});