import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MealPlan from '../MealPlan';

describe('MealPlan', () => {
  it('renders the card with title', () => {
    render(<MealPlan />);
    
    // Check if the main title is rendered
    expect(screen.getByText('Planification des repas')).toBeInTheDocument();
  });

  it('renders meal time cards', () => {
    render(<MealPlan />);
    
    // Check if all meal time cards are rendered
    expect(screen.getByText('Matin')).toBeInTheDocument();
    expect(screen.getByText('Midi')).toBeInTheDocument();
    expect(screen.getByText('Soir')).toBeInTheDocument();
  });

  it('renders correct structure with meal cards', () => {
    render(<MealPlan />);
    
    // Check that all meal time texts are present
    const matinCard = screen.getByText('Matin');
    const midiCard = screen.getByText('Midi');
    const soirCard = screen.getByText('Soir');
    
    expect(matinCard).toBeInTheDocument();
    expect(midiCard).toBeInTheDocument();
    expect(soirCard).toBeInTheDocument();
  });
});