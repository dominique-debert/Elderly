import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NotFoundPage from '../NotFoundPage';

describe('NotFoundPage', () => {
  it('renders 404 error message', () => {
    render(<NotFoundPage />);
    
    expect(screen.getByText('404 - Page non trouvée')).toBeInTheDocument();
  });

  it('has proper layout structure and styling', () => {
    const { container } = render(<NotFoundPage />);
    
    // Check for main container classes
    const mainContainer = container.querySelector('.h-screen.flex.items-center.justify-center');
    expect(mainContainer).toBeInTheDocument();
  });

  it('renders error message with correct styling classes', () => {
    render(<NotFoundPage />);
    
    const errorMessage = screen.getByText('404 - Page non trouvée');
    expect(errorMessage).toHaveClass('text-2xl', 'font-semibold', 'text-destructive');
  });

  it('centers content both horizontally and vertically', () => {
    const { container } = render(<NotFoundPage />);
    
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('h-screen', 'flex', 'items-center', 'justify-center');
  });

  it('uses semantic heading element', () => {
    render(<NotFoundPage />);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('404 - Page non trouvée');
  });
});