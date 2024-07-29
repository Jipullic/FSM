import { Component, type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    error: null
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  render() {
    const { error } = this.state

    if (error) {
      return (
        <div>
          <p>Что-то пошло не так</p>
          <p>Ошибка: {error.message}</p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
