import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Timeline, TimelineItem, TimelineContent } from '../timeline';

describe('Timeline Component', () => {
  it('renders timeline with items correctly', () => {
    render(
      <Timeline>
        <TimelineItem>
          <TimelineContent position="start">Morning</TimelineContent>
          <TimelineContent position="middle">🕐</TimelineContent>
          <TimelineContent position="end">Medication 1</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent position="start">Evening</TimelineContent>
          <TimelineContent position="middle">🕕</TimelineContent>
          <TimelineContent position="end">Medication 2</TimelineContent>
        </TimelineItem>
      </Timeline>
    );

    expect(screen.getByText('Morning')).toBeInTheDocument();
    expect(screen.getByText('Evening')).toBeInTheDocument();
    expect(screen.getByText('Medication 1')).toBeInTheDocument();
    expect(screen.getByText('Medication 2')).toBeInTheDocument();
  });

  it('applies correct CSS classes for vertical layout', () => {
    const { container } = render(
      <Timeline>
        <TimelineItem>
          <TimelineContent position="start">Test</TimelineContent>
        </TimelineItem>
      </Timeline>
    );

    const timeline = container.querySelector('ul');
    expect(timeline).toHaveClass('space-y-8');
  });

  it('applies correct CSS classes for horizontal layout', () => {
    const { container } = render(
      <Timeline orientation="horizontal">
        <TimelineItem>
          <TimelineContent position="start">Test</TimelineContent>
        </TimelineItem>
      </Timeline>
    );

    const timeline = container.querySelector('ul');
    expect(timeline).toHaveClass('flex', 'items-start', 'justify-between', 'w-full');
  });

  it('renders timeline content with correct position classes', () => {
    render(
      <Timeline>
        <TimelineItem>
          <TimelineContent position="start">Start</TimelineContent>
          <TimelineContent position="middle">Middle</TimelineContent>
          <TimelineContent position="end">End</TimelineContent>
        </TimelineItem>
      </Timeline>
    );

    const startContent = screen.getByText('Start');
    const middleContent = screen.getByText('Middle');
    const endContent = screen.getByText('End');

    expect(startContent).toHaveClass('text-right', 'flex-shrink-0');
    expect(middleContent).toHaveClass('flex-shrink-0', 'z-10');
    expect(endContent).toHaveClass('bg-background', 'border', 'rounded-lg', 'p-3');
  });

  it('shows connector line for non-last items', () => {
    const { container } = render(
      <Timeline>
        <TimelineItem isLast={false}>
          <TimelineContent position="start">Test</TimelineContent>
        </TimelineItem>
      </Timeline>
    );

    const connector = container.querySelector('.absolute.left-8.top-12');
    expect(connector).toBeInTheDocument();
  });

  it('does not show connector line for last item', () => {
    const { container } = render(
      <Timeline>
        <TimelineItem isLast={true}>
          <TimelineContent position="start">Test</TimelineContent>
        </TimelineItem>
      </Timeline>
    );

    const connector = container.querySelector('.absolute.left-8.top-12');
    expect(connector).not.toBeInTheDocument();
  });
});