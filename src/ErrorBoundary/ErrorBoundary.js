import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    errorMessage: "",
    hasError: false
  };

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    });
  };

  render() {
    if (this.state.hasError) {
      return <p1>{this.state.errorMessage}</p1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
