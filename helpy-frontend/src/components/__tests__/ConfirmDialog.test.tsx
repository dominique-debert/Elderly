import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ConfirmDialog from '../ConfirmDialog';

describe('ConfirmDialog', () => {
  const mockOnConfirm = vi.fn();
  const mockOnCancel = vi.fn();
  const defaultProps = {
    open: true,
    message: 'Are you sure you want to delete this item?',
    onConfirm: mockOnConfirm,
    onCancel: mockOnCancel,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the dialog when open is true', () => {
    render(<ConfirmDialog {...defaultProps} />);
    
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Confirmer')).toBeInTheDocument();
    expect(screen.getByText('Are you sure you want to delete this item?')).toBeInTheDocument();
  });

  it('does not render the dialog when open is false', () => {
    render(<ConfirmDialog {...defaultProps} open={false} />);
    
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders cancel and confirm buttons', () => {
    render(<ConfirmDialog {...defaultProps} />);
    
    expect(screen.getByRole('button', { name: 'Annuler' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Supprimer' })).toBeInTheDocument();
  });

  it('calls onCancel when cancel button is clicked', () => {
    render(<ConfirmDialog {...defaultProps} />);
    
    fireEvent.click(screen.getByRole('button', { name: 'Annuler' }));
    
    expect(mockOnCancel).toHaveBeenCalledTimes(1);
  });

  it('calls onConfirm when confirm button is clicked', () => {
    render(<ConfirmDialog {...defaultProps} />);
    
    fireEvent.click(screen.getByRole('button', { name: 'Supprimer' }));
    
    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });

  it('has proper accessibility attributes', () => {
    render(<ConfirmDialog {...defaultProps} />);
    
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-labelledby');
    expect(dialog).toHaveAttribute('aria-describedby');
  });

  it('applies destructive variant to confirm button', () => {
    render(<ConfirmDialog {...defaultProps} />);
    
    const confirmButton = screen.getByRole('button', { name: 'Supprimer' });
    expect(confirmButton).toHaveClass('bg-destructive');
  });

  it('applies outline variant to cancel button', () => {
    render(<ConfirmDialog {...defaultProps} />);
    
    const cancelButton = screen.getByRole('button', { name: 'Annuler' });
    expect(cancelButton).toHaveClass('border');
  });
});