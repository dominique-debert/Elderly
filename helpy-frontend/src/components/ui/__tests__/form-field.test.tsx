import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FormField, InputField, TextareaField } from '../form-field'
import { Input } from '../input'

describe('FormField', () => {
  it('renders without label or error', () => {
    render(
      <FormField>
        <Input placeholder="Test input" />
      </FormField>
    )
    const input = screen.getByPlaceholderText('Test input')
    expect(input).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(
      <FormField label="Test Label">
        <Input placeholder="Test input" />
      </FormField>
    )
    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
  })

  it('renders with required indicator', () => {
    render(
      <FormField label="Required Field" required>
        <Input placeholder="Test input" />
      </FormField>
    )
    const requiredIndicator = screen.getByText('*')
    expect(requiredIndicator).toBeInTheDocument()
    expect(requiredIndicator).toHaveClass('text-destructive')
  })

  it('renders with error message', () => {
    render(
      <FormField label="Test Field" error="This field is required">
        <Input placeholder="Test input" />
      </FormField>
    )
    const errorMessage = screen.getByText('This field is required')
    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveClass('text-destructive')
  })

  it('applies error styling to label when error exists', () => {
    render(
      <FormField label="Test Field" error="Error message">
        <Input placeholder="Test input" />
      </FormField>
    )
    const label = screen.getByText('Test Field')
    expect(label).toHaveClass('text-destructive')
  })
})

describe('InputField', () => {
  it('renders input with label', () => {
    render(<InputField label="Email" placeholder="Enter email" />)
    const label = screen.getByText('Email')
    const input = screen.getByPlaceholderText('Enter email')
    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('applies error styling to input', () => {
    render(
      <InputField
        label="Email"
        error="Invalid email"
        placeholder="Enter email"
      />
    )
    const input = screen.getByPlaceholderText('Enter email')
    expect(input).toHaveClass('border-destructive')
  })

  it('forwards input props correctly', () => {
    render(
      <InputField
        label="Password"
        type="password"
        disabled
        placeholder="Enter password"
      />
    )
    const input = screen.getByPlaceholderText('Enter password')
    expect(input).toHaveAttribute('type', 'password')
    expect(input).toBeDisabled()
  })
})

describe('TextareaField', () => {
  it('renders textarea with label', () => {
    render(<TextareaField label="Message" placeholder="Enter message" />)
    const label = screen.getByText('Message')
    const textarea = screen.getByPlaceholderText('Enter message')
    expect(label).toBeInTheDocument()
    expect(textarea).toBeInTheDocument()
  })

  it('applies error styling to textarea', () => {
    render(
      <TextareaField
        label="Message"
        error="Message is required"
        placeholder="Enter message"
      />
    )
    const textarea = screen.getByPlaceholderText('Enter message')
    expect(textarea).toHaveClass('border-destructive')
  })

  it('forwards textarea props correctly', () => {
    render(
      <TextareaField
        label="Description"
        rows={5}
        disabled
        placeholder="Enter description"
      />
    )
    const textarea = screen.getByPlaceholderText('Enter description')
    expect(textarea).toHaveAttribute('rows', '5')
    expect(textarea).toBeDisabled()
  })
})

describe('Input', () => {
  it('renders with default styling', () => {
    render(<Input placeholder="Test input" />)
    const input = screen.getByPlaceholderText('Test input')
    expect(input).toHaveClass(
      'flex',
      'h-9',
      'w-full',
      'rounded-md',
      'border',
      'border-input',
      'bg-transparent'
    )
  })

  it('applies custom className', () => {
    render(<Input placeholder="Test input" className="custom-class" />)
    const input = screen.getByPlaceholderText('Test input')
    expect(input).toHaveClass('custom-class')
  })

  it('forwards props correctly', () => {
    render(
      <Input
        type="email"
        placeholder="Enter email"
        disabled
        value="test@example.com"
        readOnly
      />
    )
    const input = screen.getByPlaceholderText('Enter email')
    expect(input).toHaveAttribute('type', 'email')
    expect(input).toBeDisabled()
    expect(input).toHaveValue('test@example.com')
    expect(input).toHaveAttribute('readonly')
  })
})