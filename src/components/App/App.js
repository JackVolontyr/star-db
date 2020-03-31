import React, { Component } from 'react';

import Header from '../Header';
import { PagePerson, PagePlanet, PageStarship, } from '../Page_s';
import { DetailsPlanetRandom } from '../Details_s';
import { ProviderSwapiService } from '../ContextSwapiService';
import ErrorButton from '../ErrorButton';
import ErrorCatcher from '../ErrorCatcher';
import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';

import './App.css';

const swapiService = new SwapiService();

const App = () => <div className="container">
  <ErrorCatcher className="sw-block sw-block--padding jumbotron rounded">
    <ProviderSwapiService value={ swapiService }>
      <Header />
      <DetailsPlanetRandom />
      <ErrorButton />

      <PagePerson />
      <PagePlanet />
      <PageStarship />
    </ProviderSwapiService>
  </ErrorCatcher>
</div>

export default App;
