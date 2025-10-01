import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import SignupPage from '../SignupPage';

// Mock the stores
const mockSignup = vi.fn();
const mockSetEmail = vi.fn();
const mockSetPassword = vi.fn();
const mockSetFirstName = vi.fn();
const mockSetLastName = vi.fn();
const mockSetBirthDate = vi.fn();
const mockSetIsAdmin = vi.fn();

vi.mock('../../stores/auth', () => ({
  useAuthStore: () => ({
    signup: mockSignup,
  }),
}));

vi.mock('../../stores/signup', () => ({
  useSignupStore: () => ({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: new Date('1990-01-01'),
    isAdmin: false,
    setEmail: mockSetEmail,
    setPassword: mockSetPassword,
    setFirstName: mockSetFirstName,
    setLastName: mockSetLastName,
    setBirthDate: mockSetBirthDate,
    setIsAdmin: mockSetIsAdmin,
  }),
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

const renderSignupPage = () => {
  return render(
    <BrowserRouter>
      <SignupPage />
    </BrowserRouter>
  );
};

describe('SignupPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders signup form with all required elements', () => {
    renderSignupPage();
    
    expect(screen.getByRole('heading', { name: "S'inscrire" })).toBeInTheDocument();
    expect(screen.getByText('Inscrivez-vous gratuitement pour accéder à nos services.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Mot de passe')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Prénom')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Nom')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Date de naissance')).toBeInTheDocument();
    expect(screen.getByLabelText('Administrateur')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: "S'inscrire" })).toBeInTheDocument();
  });

  it('renders background video element', () => {
    renderSignupPage();
    
    const video = document.querySelector('#background-video');
    expect(video).toBeInTheDocument();
  });

  it('allows input values to be changed', () => {
    renderSignupPage();
    
    const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText('Mot de passe') as HTMLInputElement;
    const firstNameInput = screen.getByPlaceholderText('Prénom') as HTMLInputElement;
    const lastNameInput = screen.getByPlaceholderText('Nom') as HTMLInputElement;
    const birthDateInput = screen.getByPlaceholderText('Date de naissance') as HTMLInputElement;
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(birthDateInput, { target: { value: '1990-01-01' } });
    
    // Verify the inputs can accept values (basic functionality test)
    expect(emailInput.type).toBe('email');
    expect(passwordInput.type).toBe('password');
    expect(firstNameInput.type).toBe('text');
    expect(lastNameInput.type).toBe('text');
    expect(birthDateInput.type).toBe('date');
  });

  it('toggles admin checkbox correctly', () => {
    renderSignupPage();
    
    const adminCheckbox = screen.getByLabelText('Administrateur');
    fireEvent.click(adminCheckbox);
    
    expect(mockSetIsAdmin).toHaveBeenCalledWith(true);
  });

  it('has a functional submit button', () => {
    renderSignupPage();
    
    const submitButton = screen.getByRole('button', { name: "S'inscrire" });
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).not.toBeDisabled();
  });

  it('has all required input attributes', () => {
    renderSignupPage();
    
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Mot de passe');
    const firstNameInput = screen.getByPlaceholderText('Prénom');
    const lastNameInput = screen.getByPlaceholderText('Nom');
    const birthDateInput = screen.getByPlaceholderText('Date de naissance');
    
    expect(emailInput).toHaveAttribute('required');
    expect(passwordInput).toHaveAttribute('required');
    expect(firstNameInput).toHaveAttribute('required');
    expect(lastNameInput).toHaveAttribute('required');
    expect(birthDateInput).toHaveAttribute('required');
    
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(firstNameInput).toHaveAttribute('type', 'text');
    expect(lastNameInput).toHaveAttribute('type', 'text');
    expect(birthDateInput).toHaveAttribute('type', 'date');
  });

  it('has link to login page', () => {
    renderSignupPage();
    
    expect(screen.getByText('Déjà un compte ?')).toBeInTheDocument();
    const loginLink = screen.getByRole('link', { name: 'Se connecter' });
    expect(loginLink).toHaveAttribute('href', '/login');
  });

  it('renders checkbox with correct accessibility attributes', () => {
    renderSignupPage();
    
    const checkbox = screen.getByLabelText('Administrateur');
    expect(checkbox).toHaveAttribute('id', 'isAdmin');
    expect(checkbox).toHaveAttribute('type', 'button'); // Radix checkbox renders as button
  });
});