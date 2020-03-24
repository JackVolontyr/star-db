import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ListPeople from '../ListPeople';
import DetailsPerson from '../DetailsPerson';
import ErrorView from '../ErrorView';

import './App.css';

export default class App extends Component {
  state = {
    isShowRandomPlanet: true,
    currentPersonId: null,
    isHasError: false,
  };

  clickOnPerson = (id) => {
    this.setState({ currentPersonId: id })
  }

  componentDidCatch() {
    this.setState({ isHasError: true })
  }

  render() {
    const { currentPersonId, isHasError } = this.state;

    if (isHasError) {
      return (
        <div className="sw-block sw-block--padding sw-block--margin jumbotron rounded">
          <ErrorView />
        </div>
      );
    }

    return (
      <div className="container">
        <Header />
        <RandomPlanet />

        <ErrorButton />

        <div className="row mb2">
          <div className="col-md-6">
            <ListPeople clickOnPerson={ this.clickOnPerson } />
          </div>
          <div className="col-md-6">
            <DetailsPerson personId={ currentPersonId } />
          </div>
        </div>

      </div>
    );
  }
}

class ErrorButton extends Component {
  state = {
    renderError: false
  }

  render() {
    console.log('error rendering!');

    if (this.state.renderError) {
      this.empty.empty = 0;
    }

    return (
      <button
        className="btn btn-danger btn-lg"
        style={ { marginBottom: '40px' } }
        onClick={
          () => this.setState({ renderError: true })
        }>
        Throw Error
      </button>
    )
  }
}
