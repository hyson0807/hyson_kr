'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">문제가 발생했습니다</h2>
              <p className="text-gray-400 mb-6">페이지를 새로고침 해주세요.</p>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors"
              >
                다시 시도
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
