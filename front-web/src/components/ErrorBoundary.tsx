import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-screen items-center justify-center">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-error">Something went wrong</h2>
                <p className="text-sm text-base-content/70">
                  {this.state.error?.message}
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => window.location.reload()}
                  >
                    Refresh page
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}