import React, { Component, Fragment } from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorView from '../ErrorView';

import './DetailsPerson.css';

export default class DetailsPerson extends Component {
  state = {
    person: null,
    isLoading: false,
    isError: false,
  }

  updatePerson = () => {
    this.swapiService =  new SwapiService();
    const { personId } = this.props;

    if (personId) {
      this.swapiService.getPerson(personId)
        .then(this.personLoaded)
        .catch(this.catchError);
    }
  }

  personLoaded = (person) => {
    this.setState({
      person,
      isLoading: false,
      isError: false
    });
  }

  catchError = (err) => {
    this.setState({
      isLoading: false,
      isError: true
    });
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({ isLoading: true });
      this.updatePerson();
    }
  }

  render() {
    console.log(this.state);

    if (!this.state.person && !this.state.isLoading) {
      return (
        <div className="sw-block sw-block--padding jumbotron rounded">
          <span>Select a person from list.</span>
        </div>
      );
    };

    const { person, isLoading, isError } = this.state;

    const isHasData = !(isLoading || isError);
    const spinner = isLoading ? <Spinner /> : null;
    const content = isHasData ? <PersonView person={ person } /> : null;
    const errorMessage = !isLoading && isError ?
      <ErrorView theme={ 'padding' } /> : null;

    return (
      <div className="sw-block sw-detail-person jumbotron rounded">
        { spinner }
        { content }
        { errorMessage }
      </div>
    );
  }
}

const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;
  return (
    <Fragment>
      <img
        className="sw-image"
        src={ `//starwars-visualguide.com/assets/img/characters/${ id }.jpg` } />

      <div className="">
        <h4>{ name }</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="term">Gender: </span>
            <span>{ gender }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Day: </span>
            <span>{ birthYear }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color: </span>
            <span>{ eyeColor }</span>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}
