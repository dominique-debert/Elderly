import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Modal, ConfirmModal, AlertModal } from '../modal'

describe('Modal', () => {
  it('renders when open is true', () => {
    render(
      <Modal open={true} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    )
    
    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByText('Modal content')).toBeInTheDocument()
  })

  it('does not render when open is false', () => {
    render(
      <Modal open={false} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    )
    
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument()
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument()
  })

  it('renders with title and description', () => {
    render(
      <Modal 
        open={true} 
        title="Test Modal" 
        description="Modal description"
      >
        <p>Modal content</p>
      </Modal>
    )
    
    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByText('Modal description')).toBeInTheDocument()
  })

  it('renders with footer', () => {
    render(
      <Modal 
        open={true} 
        title="Test Modal"
        footer={<button>Footer Button</button>}
      >
        <p>Modal content</p>
      </Modal>
    )
    
    expect(screen.getByRole('button', { name: 'Footer Button' })).toBeInTheDocument()
  })

  it('applies size classes correctly', () => {
    const { rerender } = render(
      <Modal open={true} size="sm" data-testid="modal-content">
        Content
      </Modal>
    )
    
    let modalContent = screen.getByTestId('modal-content')
    expect(modalContent).toHaveClass('max-w-sm')

    rerender(
      <Modal open={true} size="lg" data-testid="modal-content">
        Content
      </Modal>
    )
    
    modalContent = screen.getByTestId('modal-content')
    expect(modalContent).toHaveClass('max-w-2xl')
  })

  it('calls onOpenChange when close button is clicked', async () => {
    const onOpenChange = vi.fn()
    
    render(
      <Modal open={true} onOpenChange={onOpenChange} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    )
    
    const closeButton = screen.getByRole('button', { name: 'Close' })
    fireEvent.click(closeButton)
    
    await waitFor(() => {
      expect(onOpenChange).toHaveBeenCalledWith(false)
    })
  })
})

describe('ConfirmModal', () => {
  it('renders with default props', () => {
    render(<ConfirmModal open={true} />)
    
    expect(screen.getByText('Confirm Action')).toBeInTheDocument()
    expect(screen.getByText('Are you sure you want to continue?')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
  })

  it('renders with custom props', () => {
    render(
      <ConfirmModal 
        open={true}
        title="Delete Item"
        description="This action cannot be undone"
        confirmText="Delete"
        cancelText="Keep"
      />
    )
    
    expect(screen.getByText('Delete Item')).toBeInTheDocument()
    expect(screen.getByText('This action cannot be undone')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Keep' })).toBeInTheDocument()
  })

  it('calls onConfirm when confirm button is clicked', async () => {
    const onConfirm = vi.fn()
    const onOpenChange = vi.fn()
    
    render(
      <ConfirmModal 
        open={true}
        onConfirm={onConfirm}
        onOpenChange={onOpenChange}
      />
    )
    
    const confirmButton = screen.getByRole('button', { name: 'Confirm' })
    fireEvent.click(confirmButton)
    
    expect(onConfirm).toHaveBeenCalled()
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('calls onCancel when cancel button is clicked', async () => {
    const onCancel = vi.fn()
    const onOpenChange = vi.fn()
    
    render(
      <ConfirmModal 
        open={true}
        onCancel={onCancel}
        onOpenChange={onOpenChange}
      />
    )
    
    const cancelButton = screen.getByRole('button', { name: 'Cancel' })
    fireEvent.click(cancelButton)
    
    expect(onCancel).toHaveBeenCalled()
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('shows loading state', () => {
    render(
      <ConfirmModal 
        open={true}
        loading={true}
        confirmText="Delete"
      />
    )
    
    const confirmButton = screen.getByRole('button', { name: 'Loading...' })
    const cancelButton = screen.getByRole('button', { name: 'Cancel' })
    
    expect(confirmButton).toBeDisabled()
    expect(cancelButton).toBeDisabled()
  })

  it('does not close modal when loading and confirm is clicked', () => {
    const onOpenChange = vi.fn()
    
    render(
      <ConfirmModal 
        open={true}
        loading={true}
        onOpenChange={onOpenChange}
      />
    )
    
    const confirmButton = screen.getByRole('button', { name: 'Loading...' })
    fireEvent.click(confirmButton)
    
    expect(onOpenChange).not.toHaveBeenCalled()
  })
})

describe('AlertModal', () => {
  it('renders with default props', () => {
    render(<AlertModal open={true} />)
    
    expect(screen.getByText('Alert')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'OK' })).toBeInTheDocument()
  })

  it('renders with custom props', () => {
    render(
      <AlertModal 
        open={true}
        title="Success"
        description="Operation completed successfully"
        buttonText="Great!"
      />
    )
    
    expect(screen.getByText('Success')).toBeInTheDocument()
    expect(screen.getByText('Operation completed successfully')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Great!' })).toBeInTheDocument()
  })

  it('calls onOpenChange when button is clicked', () => {
    const onOpenChange = vi.fn()
    
    render(
      <AlertModal 
        open={true}
        onOpenChange={onOpenChange}
      />
    )
    
    const button = screen.getByRole('button', { name: 'OK' })
    fireEvent.click(button)
    
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('renders with different variants', () => {
    const { rerender } = render(
      <AlertModal open={true} variant="destructive" />
    )
    
    expect(screen.getByRole('button', { name: 'OK' })).toBeInTheDocument()

    rerender(<AlertModal open={true} variant="warning" />)
    expect(screen.getByRole('button', { name: 'OK' })).toBeInTheDocument()
  })
})