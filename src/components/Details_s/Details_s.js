import React, { Fragment } from 'react';

import Details from '../Details';
import Spinner from '../Spinner';
import ItemField from '../ItemField';
import { HocConsumerSwapi } from '../HocHelpers';


const DetailsPlanetRandom = HocConsumerSwapi(
  ({ props, swapiService }) => {
    const { getPlanet, getImage } = swapiService;
    // const itemId = Math.floor(Math.random() * 25) + 2;
    const itemId = 1;

    return <Fragment>
      <h2>Welcome to StarDB!</h2>
      <Details
        dataPromise={getPlanet(itemId)}
        imageString={'planets'}
        imageData={getImage}
        defaultMessage={<Spinner />}
        itemId={itemId}>
        <ItemField field="population" label="Population" />
        <ItemField field="rotationPeriod" label="Rotation Period" />
        <ItemField field="diameter" label="Diameter" />
      </Details>
    </Fragment>
  }
);


const DetailsPerson = () => {}
const DetailsPlanet = () => {}
const DetailsStarship = () => {}

export { 
  DetailsPlanetRandom, 
  DetailsPerson, 
  DetailsPlanet, 
  DetailsStarship, 
};
