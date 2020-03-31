import React from 'react';
import { ConsumerSwapiService } from '../ContextSwapiService';

const HocConsumerSwapi = (View) => {
  return (props) => <ConsumerSwapiService>
    { (swapiService) => <View {...props} swapiService={swapiService} /> }
  </ConsumerSwapiService>
}

export default HocConsumerSwapi;