import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { 
  CustomCard, 
  DashboardCard, 
  MetricCard, 
  InfoCard 
} from '../custom-card'

describe('CustomCard', () => {
  it('renders with default variant', () => {
    render(<CustomCard data-testid="card">Card Content</CustomCard>)
    const card = screen.getByTestId('card')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('shadow')
  })

  it('renders with elevated variant', () => {
    render(<CustomCard variant="elevated" data-testid="card">Card Content</CustomCard>)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('shadow-lg')
  })

  it('renders with outlined variant', () => {
    render(<CustomCard variant="outlined" data-testid="card">Card Content</CustomCard>)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('border-2', 'border-primary/20')
  })

  it('renders with ghost variant', () => {
    render(<CustomCard variant="ghost" data-testid="card">Card Content</CustomCard>)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('border-0', 'shadow-none', 'bg-transparent')
  })

  it('applies custom className', () => {
    render(<CustomCard className="custom-class" data-testid="card">Card Content</CustomCard>)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('custom-class')
  })
})

describe('DashboardCard', () => {
  it('renders with title only', () => {
    render(<DashboardCard title="Dashboard Title">Card Content</DashboardCard>)
    const title = screen.getByText('Dashboard Title')
    const content = screen.getByText('Card Content')
    expect(title).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })

  it('renders with title and description', () => {
    render(
      <DashboardCard 
        title="Dashboard Title" 
        description="Dashboard description"
      >
        Card Content
      </DashboardCard>
    )
    const title = screen.getByText('Dashboard Title')
    const description = screen.getByText('Dashboard description')
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('renders with icon', () => {
    render(
      <DashboardCard 
        title="Dashboard Title" 
        icon={<span data-testid="icon">🔥</span>}
      >
        Card Content
      </DashboardCard>
    )
    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
  })

  it('renders with action', () => {
    render(
      <DashboardCard 
        title="Dashboard Title" 
        action={<button>Action</button>}
      >
        Card Content
      </DashboardCard>
    )
    const action = screen.getByRole('button', { name: 'Action' })
    expect(action).toBeInTheDocument()
  })

  it('renders without header when no title, description, icon, or action', () => {
    render(<DashboardCard>Card Content</DashboardCard>)
    const content = screen.getByText('Card Content')
    expect(content).toBeInTheDocument()
    // Should not render header elements
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })
})

describe('MetricCard', () => {
  it('renders with title and value', () => {
    render(<MetricCard title="Total Users" value="1,234" />)
    const title = screen.getByText('Total Users')
    const value = screen.getByText('1,234')
    expect(title).toBeInTheDocument()
    expect(value).toBeInTheDocument()
  })

  it('renders with positive change', () => {
    render(
      <MetricCard 
        title="Revenue" 
        value="$12,345" 
        change="+12.5% from last month"
        changeType="positive"
      />
    )
    const change = screen.getByText('+12.5% from last month')
    expect(change).toBeInTheDocument()
    expect(change).toHaveClass('text-green-600')
  })

  it('renders with negative change', () => {
    render(
      <MetricCard 
        title="Bounce Rate" 
        value="23%" 
        change="-5.2% from last month"
        changeType="negative"
      />
    )
    const change = screen.getByText('-5.2% from last month')
    expect(change).toBeInTheDocument()
    expect(change).toHaveClass('text-red-600')
  })

  it('renders with neutral change', () => {
    render(
      <MetricCard 
        title="Sessions" 
        value="8,432" 
        change="No change from last month"
        changeType="neutral"
      />
    )
    const change = screen.getByText('No change from last month')
    expect(change).toBeInTheDocument()
    expect(change).toHaveClass('text-muted-foreground')
  })

  it('renders with icon', () => {
    render(
      <MetricCard 
        title="Orders" 
        value="456" 
        icon={<span data-testid="metric-icon">📦</span>}
      />
    )
    const icon = screen.getByTestId('metric-icon')
    expect(icon).toBeInTheDocument()
  })
})

describe('InfoCard', () => {
  it('renders with title and content', () => {
    render(<InfoCard title="Information">This is some info</InfoCard>)
    const title = screen.getByText('Information')
    const content = screen.getByText('This is some info')
    expect(title).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })

  it('renders with description', () => {
    render(
      <InfoCard 
        title="Information" 
        description="Additional details"
      >
        Content
      </InfoCard>
    )
    const description = screen.getByText('Additional details')
    expect(description).toBeInTheDocument()
  })

  it('renders with footer', () => {
    render(
      <InfoCard 
        title="Information" 
        footer={<button>Footer Action</button>}
      >
        Content
      </InfoCard>
    )
    const footer = screen.getByRole('button', { name: 'Footer Action' })
    expect(footer).toBeInTheDocument()
  })

  it('renders without header when no title or description', () => {
    render(<InfoCard>Just content</InfoCard>)
    const content = screen.getByText('Just content')
    expect(content).toBeInTheDocument()
    // Should not render header elements
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })
})