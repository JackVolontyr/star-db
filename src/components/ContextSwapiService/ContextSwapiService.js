import React, { createContext } from 'react';

const {
  Provider: ProviderSwapiService,
  Consumer: ConsumerSwapiService
} = createContext();

export {
  ProviderSwapiService,
  ConsumerSwapiService
};
