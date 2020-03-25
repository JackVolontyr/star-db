import React from 'react';
import SwapiService from '../../services/SwapiService';

import Page from '../Page';
import ItemField from '../ItemField';

const {
  getImage,
  getPerson, getAllPeople,
  getPlanet, getAllPlanets,
  getStarship, getAllStarships
} = new SwapiService();

const PagePerson = () => <Page
  getDataItem={ getPerson }
  getDataList={ getAllPeople }
  imageString={ 'characters' }
  renderItem={
    ({ name, gender, birthYear }) => `${ name } (${ gender }, ${ birthYear })`
  }
  imageData={ getImage }>
  <ItemField field="gender" label="Gender" />
  <ItemField field="birthYear" label="Birth Year" />
  <ItemField field="eyeColor" label="Eye Color" />
</Page>

const PagePlanet = () => <Page
  getDataItem={ getPlanet }
  getDataList={ getAllPlanets }
  imageString={ 'planets' }
  renderItem={
    ({ name, diameter }) => <span>{ name } <b style={ { color: 'gold' } }>(diameter: { diameter })</b></span>
  }
  imageData={ getImage }>
  <ItemField field="population" label="Population" />
  <ItemField field="rotationPeriod" label="Rotation Period" />
  <ItemField field="diameter" label="Diameter" />
</Page>

const PageStarship = () => <Page
  getDataItem={ getStarship }
  getDataList={ getAllStarships }
  imageString={ 'starships' }
  renderItem={
    ({ name, model, length }) => `${ name } (${ model }, length: ${ length })`
  }
  imageData={ getImage }>
  <ItemField field="model" label="Model" />
  <ItemField field="manufacturer" label="Manufacturer" />
  <ItemField field="length" label="Length" />
  <ItemField field="crew" label="Crew" />
  <ItemField field="passengers" label="Passengers" />
  <ItemField field="cargoCapacity" label="Cargo Capacity" />
</Page>

export { PagePerson, PagePlanet, PageStarship, };
