import React from 'react';

import Details from '../Details';
import Spinner from '../Spinner';
import ItemField from '../ItemField';

import { ConsumerSwapiService } from '../ContextSwapiService';

const DetailsPlanetRandom = () => {
  const itemId = Math.floor(Math.random() * 25) + 2;

  return <ConsumerSwapiService>
    {
      ({ getPlanet, getImage }) => <Details
        dataPromise={ getPlanet(itemId) }
        imageString={ 'planets' }
        imageData={ getImage }
        defaultMessage={ <Spinner /> }
        itemId={ itemId }>
        <ItemField field="population" label="Population" />
        <ItemField field="rotationPeriod" label="Rotation Period" />
        <ItemField field="diameter" label="Diameter" />
      </Details>
    }
  </ConsumerSwapiService>;
}

const DetailsPerson = () => {}
const DetailsPlanet = () => {}
const DetailsStarship = () => {}

export { DetailsPerson, DetailsPlanetRandom, DetailsPlanet, DetailsStarship, };
