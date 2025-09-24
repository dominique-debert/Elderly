import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CustomButton } from '../custom-button'

describe('CustomButton', () => {
  it('renders with default primary variant', () => {
    render(<CustomButton>Test Button</CustomButton>)
    const button = screen.getByRole('button', { name: 'Test Button' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary', 'text-primary-foreground')
  })

  it('renders with primary variant', () => {
    render(<CustomButton variant="primary">Primary Button</CustomButton>)
    const button = screen.getByRole('button', { name: 'Primary Button' })
    expect(button).toHaveClass('bg-primary', 'text-primary-foreground')
  })

  it('renders with primary-outline variant', () => {
    render(<CustomButton variant="primary-outline">Outline Button</CustomButton>)
    const button = screen.getByRole('button', { name: 'Outline Button' })
    expect(button).toHaveClass('border-primary', 'text-primary', 'bg-transparent')
  })

  it('renders with primary-ghost variant', () => {
    render(<CustomButton variant="primary-ghost">Ghost Button</CustomButton>)
    const button = screen.getByRole('button', { name: 'Ghost Button' })
    expect(button).toHaveClass('text-primary')
  })

  it('renders with primary-soft variant', () => {
    render(<CustomButton variant="primary-soft">Soft Button</CustomButton>)
    const button = screen.getByRole('button', { name: 'Soft Button' })
    expect(button).toHaveClass('bg-primary/10', 'text-primary')
  })

  it('renders with different sizes', () => {
    render(<CustomButton size="sm">Small Button</CustomButton>)
    const smallButton = screen.getByRole('button', { name: 'Small Button' })
    expect(smallButton).toHaveClass('h-8', 'px-3', 'text-xs')

    render(<CustomButton size="lg">Large Button</CustomButton>)
    const largeButton = screen.getByRole('button', { name: 'Large Button' })
    expect(largeButton).toHaveClass('h-10', 'px-8')
  })

  it('renders with icon size', () => {
    render(<CustomButton size="icon" aria-label="Icon Button">🔥</CustomButton>)
    const iconButton = screen.getByRole('button', { name: 'Icon Button' })
    expect(iconButton).toHaveClass('h-9', 'w-9')
  })

  it('applies custom className', () => {
    render(<CustomButton className="custom-class">Custom Button</CustomButton>)
    const button = screen.getByRole('button', { name: 'Custom Button' })
    expect(button).toHaveClass('custom-class')
  })

  it('forwards props correctly', () => {
    render(<CustomButton disabled>Disabled Button</CustomButton>)
    const button = screen.getByRole('button', { name: 'Disabled Button' })
    expect(button).toBeDisabled()
  })

  it('renders as child when asChild is true', () => {
    render(
      <CustomButton asChild>
        <a href="/test">Link Button</a>
      </CustomButton>
    )
    const link = screen.getByRole('link', { name: 'Link Button' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })
})