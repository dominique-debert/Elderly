import { render, screen } from '@testing-library/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { describe, it, expect } from 'vitest';

const TestTooltip = ({ content = "Tooltip content" }: { content?: string }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <button>Hover me</button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

describe('Tooltip Component', () => {
  it('should render the trigger element', () => {
    render(<TestTooltip />);
    
    const trigger = screen.getByRole('button', { name: 'Hover me' });
    expect(trigger).toBeInTheDocument();
  });

  it('should render tooltip components without errors', () => {
    render(<TestTooltip content="Test tooltip content" />);
    
    const trigger = screen.getByRole('button', { name: 'Hover me' });
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute('data-state', 'closed');
  });

  it('should render with custom positioning props', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button>Hover me</button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="center">
            <p>Bottom tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    
    const trigger = screen.getByRole('button', { name: 'Hover me' });
    expect(trigger).toBeInTheDocument();
  });

  it('should support nested content', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button>Complex trigger</button>
          </TooltipTrigger>
          <TooltipContent>
            <div>
              <strong>Title</strong>
              <p>Description</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    
    const trigger = screen.getByRole('button', { name: 'Complex trigger' });
    expect(trigger).toBeInTheDocument();
  });
});