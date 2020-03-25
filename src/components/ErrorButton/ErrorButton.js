import React, { Component } from 'react';
import './ErrorButton.css';

export default class ErrorButton extends Component {
  state = { renderError: false }

  render() {
    if (this.state.renderError) this.empty.empty = 0;

    return (
      <button
        className="btn btn-danger btn-lg"
        style={ { marginBottom: '30px' } }
        onClick={ () => this.setState({ renderError: true }) }>
        Throw Error
      </button>
    )
  }
}
