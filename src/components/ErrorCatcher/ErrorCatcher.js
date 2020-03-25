import React, { Component } from 'react';
import ViewError from '../ViewError';
import './ErrorCatcher.css';

export default class ErrorCatcher extends Component {
  state = { isHasError: false, };
  componentDidCatch() { this.setState({ isHasError: true }) }

  render() {
    if (this.state.isHasError) {
      return <div className={ this.props.className }><ViewError /></div>;
    } else {
      return this.props.children;
    }
  }
}
