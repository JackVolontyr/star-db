import React from 'react';

import Page from '../Page';
import ItemField from '../ItemField';
import { ConsumerSwapiService } from '../ContextSwapiService';

const PagePerson = () => <ConsumerSwapiService>
  {
    ({ getPerson, getAllPeople, getImage }) => <Page
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
  }
</ConsumerSwapiService>

const PagePlanet = () => <ConsumerSwapiService>
  {
    ({ getPlanet, getAllPlanets, getImage }) => <Page
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
  }
</ConsumerSwapiService>

const PageStarship = () => <ConsumerSwapiService>
  {
    ({ getStarship, getAllStarships, getImage }) => <Page
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
  }
</ConsumerSwapiService>

export { PagePerson, PagePlanet, PageStarship, };
