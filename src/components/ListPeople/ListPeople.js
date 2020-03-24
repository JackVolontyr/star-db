import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorView from '../ErrorView';

import './ListPeople.css';

export default class ListPeople extends Component {
  swapiService = new SwapiService();

  state = {
    people: null,
    isLoading: true,
    isError: false,
  };

  peopleLoaded = (people) => {
    this.setState({
      people,
      isLoading: false,
      isError: false,
    });
  };

  catchError = (err) => {
    this.setState({
      isLoading: false,
      isError: true
    });
  };

  renderPerson = (people) => {
    const { clickOnPerson } = this.props;

    return people.map(({ name, id }) => {
      return (
        <li
          onClick={ () => clickOnPerson(id) }
          className="list-group-item"
          key={ id }>
          { name }
        </li>
      );
    });
  };

  componentDidMount() {
    this.swapiService.getAllPeople()
      .then(this.peopleLoaded)
      .catch(this.catchError);
  };

  render() {
    const { people, isLoading, isError } = this.state;

    const isHasData = !(isLoading || isError);
    const spinner = isLoading ? <Spinner /> : null;
    const content = isHasData ? ( this.renderPerson(people) ) : null;
    const errorMessage = isError ? <ErrorView /> : null;

    return (
      <ul className="sw-block sw-list-people jumbotron list-group rounded">
        { spinner }
        { content }
        { errorMessage }
      </ul>
    );
  };
}
