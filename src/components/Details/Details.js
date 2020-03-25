import React from 'react';
import DetailsList from '../DetailsList';
import HocData from '../HocData';
import HocCheckRender from '../HocCheckRender';

import './Details.css';

const Details = (props) => {
  const {
    data: { result: item, isLoading },
    defaultMessage = 'Select a item from list.',
    imageString, imageData, children
  } = props;

  if (!item && !isLoading) return <div className="sw-block--padding rounded"><span>{ defaultMessage }</span></div>;

  return <DetailsList imageString={ imageString } imageData={ imageData } item={ item }>
    { children }
  </DetailsList>;
}

export default HocData(
  HocCheckRender(Details, "sw-block jumbotron rounded"),
  false
);
