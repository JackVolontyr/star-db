// import React, { Fragment, useEffect, useState, useCallback, useMemo } from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header';
import Details from '../Details';
import ItemField from '../ItemField';
import { PagePerson, PagePlanet, PageStarship, } from '../Page_s';
import { DetailsPlanetRandom } from '../Details_s';
import { ProviderSwapiService } from '../ContextSwapiService';
import ErrorButton from '../ErrorButton';
import ErrorCatcher from '../ErrorCatcher';
import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';

import './App.css';

const App = () => {
  const [service, setService] = useState(new DummySwapiService());
  
  const changeService = () => setService((service) => {
    const Service = service instanceof SwapiService ? DummySwapiService : SwapiService;
    return new Service();
  });

  return <div className="container">
    <ErrorCatcher className="sw-block sw-block--padding jumbotron rounded">
      <ProviderSwapiService value={service}>
        <Router>
          <Header changeService={changeService} />
          
          <Route path="/" render={() => <h2>Welcome to StarDB!</h2>} exact />
          <Route path="/" component={DetailsPlanetRandom} exact />
          <Route path="/" component={ErrorButton} exact />

          <Route path="/people/:id" render={({match: {params: {id}}, location, history}) => {
            return <Details
              dataPromise={service.getPerson(id)}
              imageString={'characters'}
              imageData={service.getImage}
              itemId={id}>
              <ItemField field="population" label="Population" />
              <ItemField field="rotationPeriod" label="Rotation Period" />
              <ItemField field="diameter" label="Diameter" />
            </Details>
          }} />
          <Route path="/people" component={PagePerson} exact />

          <Route path="/planets" component={PagePlanet} />
          
          <Route path="/starships" component={PageStarship} />
        </Router>
      </ProviderSwapiService>
    </ErrorCatcher>
  </div>
}

/* v Test v */
/*
const Notification = () => {

  const [ visible, setVisible ] = useState(true);

  useEffect(
    () => {
      console.log('effect');

      const timeout = setTimeout(
        () => setVisible(false), 
        2000
      );

      return () => clearTimeout(timeout);
    },
    []
  );

  return visible && <div style={ { padding: `10px` } }>
    Hi, I am Notification!
  </div>
}

const getPlanet = (id) => fetch(`https://swapi.co/api/planets/${id}`)
    .then(res => res.json())
    .then(data => data);

const useRequest = (request) => {
  const inititalState = useMemo(() => ({
    data: null,
    loading: true,
    error: null,
  }), []);

  const [dataState, setDataState] = useState(inititalState);

  useEffect(() => {
    setDataState(inititalState);

    let isReady = true;
    request()
      .then(data => isReady && setDataState({
        data,
        loading: false,
        error: null,
      }))
      .catch(error => isReady && setDataState({
        data: null,
        loading: false,
        error,
      }));

    return () => isReady = false;
  }, [request, inititalState]);

  return dataState;
} 

const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanet(id), [ id ]);
  return useRequest(request);
} 

const PlanetInfo = () => {
  const [ id, setId ] = useState(1);
  const [ visible, setVisible ] = useState(true);
  
  const { data, loading, error } = usePlanetInfo(id);

  const buttons = <Fragment>
    <button type="button" onClick={() => setId((id) => id - 1)}>-</button>
    <button type="button" onClick={() => setId((id) => id + 1)}>+</button>
    <button type="button" onClick={() => setVisible(false)}>hide</button>
  </Fragment>;

  if (visible) {
    if (error) {
      return <div style={{ padding: `20px` }}>{ buttons } 
        <div>Error!</div>
      </div>
    
    } else if (loading) {
      return <div style={{ padding: `20px` }}>{buttons}
        <div>Loading...</div>
      </div>

    } else if (data) {
      return <div style={{ padding: `20px` }}>
        { buttons }
        <div>{id} - {data && data.name}</div>
      </div>
    }
  } else {
    return <button style={{ margin: `20px` }} type="button" onClick={() => { setVisible(true); setId(1); } }>show</button>
  }
}

const App = () => <div>
  <PlanetInfo />
</div>
*/
/* ^ Test ^ */

export default App;
