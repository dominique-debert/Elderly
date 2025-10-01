import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MedicationPlanning from '../MedicationPlanning';

describe('MedicationPlanning', () => {
  it('renders the card with title', () => {
    render(<MedicationPlanning />);
    
    // Check if the main title is rendered
    expect(screen.getByText('Planification des médicaments')).toBeInTheDocument();
  });

  it('renders the medication card with number', () => {
    render(<MedicationPlanning />);
    
    // Check if the medication card with number is rendered
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('has correct structure with nested cards', () => {
    render(<MedicationPlanning />);
    
    // Check that both the title and the inner card content are present
    const title = screen.getByText('Planification des médicaments');
    const innerCard = screen.getByText('1');
    
    expect(title).toBeInTheDocument();
    expect(innerCard).toBeInTheDocument();
  });
});