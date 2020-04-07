import React, { Fragment, useEffect, useState, useCallback, useMemo } from 'react';

import Header from '../Header';
import { PagePerson, PagePlanet, PageStarship, } from '../Page_s';
import { DetailsPlanetRandom } from '../Details_s';
import { ProviderSwapiService } from '../ContextSwapiService';
import ErrorButton from '../ErrorButton';
import ErrorCatcher from '../ErrorCatcher';
import SwapiService from '../../services/SwapiService';
// import DummySwapiService from '../../services/DummySwapiService';

import './App.css';

const swapiService = new SwapiService();

const _App = () => <div className="container">
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

/* v Test v */
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
/* ^ Test ^ */

export default App;
