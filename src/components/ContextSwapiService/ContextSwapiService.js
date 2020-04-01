import { createContext } from 'react';

const ContextSwapiService = createContext();
const ProviderSwapiService = ContextSwapiService.Provider;
const ConsumerSwapiService = ContextSwapiService.Consumer;

export {
  ContextSwapiService,
  ProviderSwapiService,
  ConsumerSwapiService,
};
