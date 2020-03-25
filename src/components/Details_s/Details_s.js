import React from 'react';
import SwapiService from '../../services/SwapiService';

import Details from '../Details';
import Spinner from '../Spinner';
import ItemField from '../ItemField';

const { getImage, getPlanet } = new SwapiService();

const DetailsPlanetRandom = () => {
  const itemId = Math.floor(Math.random() * 25) + 2;

  return <Details
    dataPromise={ getPlanet(itemId) }
    imageString={ 'planets' }
    imageData={ getImage }
    defaultMessage={ <Spinner /> }
    itemId={ itemId }>
    <ItemField field="population" label="Population" />
    <ItemField field="rotationPeriod" label="Rotation Period" />
    <ItemField field="diameter" label="Diameter" />
  </Details>;
}

const DetailsPerson = () => {}
const DetailsPlanet = () => {}
const DetailsStarship = () => {}

export { DetailsPerson, DetailsPlanetRandom, DetailsPlanet, DetailsStarship, };
