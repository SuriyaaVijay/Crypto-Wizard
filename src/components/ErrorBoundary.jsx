import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Update state with error details
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });

    // You can also log the error to an error reporting service here
    // or perform any other desired error handling tasks
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when an error occurs
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error.toString()}</p>
          <p>Component Stack Error Details: {this.state.errorInfo.componentStack}</p>
          {/* You can customize the fallback UI as needed */}
        </div>
      );
    }

    // Render the wrapped components if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
