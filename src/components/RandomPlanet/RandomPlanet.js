import React, { Component, Fragment } from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorView from '../ErrorView';

import './RandomPlanet.css';
import noImage from './noimage.png';

export default class RandomPlanet extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();

    this.state = {
      planet: {},
      isLoading: true,
      isError: false,
    }

    this.planetLoaded = (planet) => {
      this.setState({
        planet,
        isLoading: false,
        isError: false,
      });
    };

    this.catchError = (err) => {
      this.setState({
        isLoading: false,
        isError: true
      });
    }

    this.updatePlanet = () => {
      const id = Math.floor(Math.random() * 25) + 2;
      this.swapiService.getPlanet(id)
        .then(this.planetLoaded)
        .catch(this.catchError);
    }
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { planet, isLoading, isError } = this.state;

    const isHasData = !(isLoading || isError);
    const spinner = isLoading ? <Spinner /> : null;
    const content = isHasData ? <PlanetView planet={ planet } /> : null;
    const errorMessage = isError ? <ErrorView /> : null;

    return (
      <div className="sw-block sw-random-planet jumbotron rounded">
        { spinner }
        { content }
        { errorMessage }
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <Fragment>
      <img
        className="sw-image"
        src={ id ?
          `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` : noImage } />

      <div>
        <h4>{ name }</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="term">Population: </span>
            <span>{ population }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period: </span>
            <span>{ rotationPeriod }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter: </span>
            <span>{ diameter }</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
