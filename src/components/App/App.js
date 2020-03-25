import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';

import Header from '../Header';
import Details from '../Details';
import Page from '../Page';
import ItemField from '../ItemField';
import Spinner from '../Spinner';
import ErrorButton from '../ErrorButton';
import ErrorCatcher from '../ErrorCatcher';

import './App.css';

export default class App extends Component {
  state = { isShowRandomPlanet: true, };

  renderItemPerson = ({ name, gender, birthYear }) => {
    return (`${ name } (${ gender }, ${ birthYear })`)
  }

  renderItemPlanet = ({ name, diameter }) => {
    return <span>{ name } <b style={ { color: 'gold' } }>(diameter: { diameter })</b></span>;
  }

  renderItemStarship = ({ name, model, length }) => {
    return (`${ name } (${ model }, length: ${ length })`)
  }

  // prepareFields = (arr) => {
  //   return arr.map((item) => {
  //     const preparedKey =
  //       item.charAt(0).toUpperCase() +
  //       item.slice(1).split(' ').join('');
  //     return <ItemField field={ preparedKey } label={ item } />;
  //   });
  // }

  render() {
    const {
      getImage,
      getPerson, getAllPeople,
      getPlanet, getAllPlanets,
      getStarship, getAllStarships
    } = new SwapiService();

    return (
      <div className="container">
        <ErrorCatcher className="sw-block sw-block--padding jumbotron rounded">
          <Header />

          <Details
            defaultMessage={ <Spinner /> }
            itemId={ Math.floor(Math.random() * 25) + 2 }
            getDataItem={ getPlanet }
            imageString={ 'planets' }
            imageData={ getImage }>
            <ItemField field="population" label="Population" />
            <ItemField field="rotationPeriod" label="Rotation Period" />
            <ItemField field="diameter" label="Diameter" />
          </Details>

          <ErrorButton />

          <Page
            getDataItem={ getPerson }
            getDataList={ getAllPeople }
            imageString={ 'characters' }
            renderItem={ this.renderItemPerson }
            imageData={ getImage }>
            <ItemField field="gender" label="Gender" />
            <ItemField field="birthYear" label="Birth Year" />
            <ItemField field="eyeColor" label="Eye Color" />
          </Page>

          <Page
            getDataItem={ getPlanet }
            getDataList={ getAllPlanets }
            imageString={ 'planets' }
            renderItem={ this.renderItemPlanet }
            imageData={ getImage }>
            <ItemField field="population" label="Population" />
            <ItemField field="rotationPeriod" label="Rotation Period" />
            <ItemField field="diameter" label="Diameter" />
          </Page>

          <Page
            getDataItem={ getStarship }
            getDataList={ getAllStarships }
            imageString={ 'starships' }
            renderItem={ this.renderItemStarship }
            imageData={ getImage }>
            <ItemField field="model" label="Model" />
            <ItemField field="manufacturer" label="Manufacturer" />
            <ItemField field="length" label="Length" />
            <ItemField field="crew" label="Crew" />
            <ItemField field="passengers" label="Passengers" />
            <ItemField field="cargoCapacity" label="Cargo Capacity" />
          </Page>
        </ErrorCatcher>
      </div>
    );
  }
}
