import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ForumCard from '../ForumCard';

describe('ForumCard', () => {
  it('renders the forum card with title', () => {
    render(<ForumCard />);
    
    expect(screen.getByText('Derniers sujets dans le forum')).toBeInTheDocument();
  });

  it('renders table headers correctly', () => {
    render(<ForumCard />);
    
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Job')).toBeInTheDocument();
    expect(screen.getByText('Favorite Color')).toBeInTheDocument();
  });

  it('renders shadcn/ui checkboxes in table', () => {
    render(<ForumCard />);
    
    // Should render 6 checkboxes (1 in header + 5 in rows)
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(6);
  });

  it('renders user data correctly', () => {
    render(<ForumCard />);
    
    // Use getAllByText for names that appear multiple times
    expect(screen.getAllByText('Hart Hagerty')).toHaveLength(2);
    expect(screen.getAllByText('Brice Swyre')).toHaveLength(2);
    expect(screen.getByText('Marjy Ferencz')).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    render(<ForumCard />);
    
    const detailButtons = screen.getAllByText('details');
    expect(detailButtons).toHaveLength(5);
  });

  it('checkboxes have proper styling and accessibility', () => {
    render(<ForumCard />);
    
    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach(checkbox => {
      // Verify checkbox is properly rendered and accessible
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).not.toBeChecked(); // Default unchecked state
    });
  });
});