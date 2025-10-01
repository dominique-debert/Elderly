import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MedicationCard from '../MedicationCard';

describe('MedicationCard Component', () => {
  it('renders medication card with timeline correctly', () => {
    render(<MedicationCard />);

    // Check if the card title is rendered
    expect(screen.getByText('Prise de médicaments')).toBeInTheDocument();

    // Check if all medication times are rendered
    expect(screen.getByText('Matin')).toBeInTheDocument();
    expect(screen.getByText('Midi')).toBeInTheDocument();
    expect(screen.getByText('Soir')).toBeInTheDocument();
    expect(screen.getByText('Nuit')).toBeInTheDocument();

    // Check if all medications are rendered
    expect(screen.getByText('Médicament 1')).toBeInTheDocument();
    expect(screen.getByText('Médicament 2')).toBeInTheDocument();
    expect(screen.getByText('Médicament 3')).toBeInTheDocument();
    expect(screen.getByText('Médicament 4')).toBeInTheDocument();
  });

  it('renders clock icons for each medication time', () => {
    const { container } = render(<MedicationCard />);

    // Check if clock icons are rendered (MDI icons)
    const clockIcons = container.querySelectorAll('svg');
    expect(clockIcons).toHaveLength(4);
  });

  it('uses shadcn/ui Card components', () => {
    const { container } = render(<MedicationCard />);

    // Check if the card uses shadcn/ui classes
    const card = container.querySelector('[class*="bg-background"]');
    expect(card).toBeInTheDocument();

    const cardWithBorder = container.querySelector('[class*="border-border"]');
    expect(cardWithBorder).toBeInTheDocument();
  });

  it('renders timeline with proper structure', () => {
    const { container } = render(<MedicationCard />);

    // Check if timeline is rendered
    const timeline = container.querySelector('ul');
    expect(timeline).toBeInTheDocument();

    // Check if timeline items are rendered
    const timelineItems = container.querySelectorAll('li');
    expect(timelineItems).toHaveLength(4);
  });

  it('has responsive layout classes', () => {
    const { container } = render(<MedicationCard />);

    // Check if responsive classes are applied
    const responsiveElements = container.querySelectorAll('[class*="lg:"]');
    expect(responsiveElements.length).toBeGreaterThan(0);
  });
});