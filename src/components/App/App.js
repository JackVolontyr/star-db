import React, { Component } from 'react';

import Header from '../Header';
import { PagePerson, PagePlanet, PageStarship, } from '../Page_s';
import { DetailsPlanetRandom } from '../Details_s';
import ErrorButton from '../ErrorButton';
import ErrorCatcher from '../ErrorCatcher';

import './App.css';

const App = () => <div className="container">
  <ErrorCatcher className="sw-block sw-block--padding jumbotron rounded">
    <Header />
    <DetailsPlanetRandom />
    <ErrorButton />

    <PagePerson />
    <PagePlanet />
    <PageStarship />
  </ErrorCatcher>
</div>

export default App;
