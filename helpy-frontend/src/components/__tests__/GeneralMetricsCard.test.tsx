import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import GeneralMetricsCard from '../GeneralMetricsCard';

describe('GeneralMetricsCard', () => {
  it('renders the card with title', () => {
    render(<GeneralMetricsCard />);
    
    // Check if the main title is rendered
    expect(screen.getByText('Mesures générales')).toBeInTheDocument();
  });

  it('renders mood section', () => {
    render(<GeneralMetricsCard />);
    
    // Check if the mood section is rendered
    expect(screen.getByText('Humeur')).toBeInTheDocument();
  });

  it('renders mood badges', () => {
    render(<GeneralMetricsCard />);
    
    // Check if mood badges are rendered
    expect(screen.getByText('concentré')).toBeInTheDocument();
    expect(screen.getByText('heureux')).toBeInTheDocument();
    expect(screen.getByText('en colère')).toBeInTheDocument();
    expect(screen.getByText('inspiré')).toBeInTheDocument();
    expect(screen.getByText('détendu')).toBeInTheDocument();
    expect(screen.getByText('triste')).toBeInTheDocument();
  });

  it('renders metric cards with numbers', () => {
    render(<GeneralMetricsCard />);
    
    // Check if numbered metric cards are rendered
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });
});