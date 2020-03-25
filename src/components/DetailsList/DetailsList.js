import React, { Fragment, Children, cloneElement } from 'react';
import RowDouble from '../RowDouble';

import './DetailsList.css';

const DetailsList = ({ imageString, imageData, item, children }) => {
  const { id, name } = item;

  const imageComponent = <img alt={ name } className="sw-image" src={ imageData(id, imageString) } />;

  const details = (
    <Fragment>
      <h4>{ name }</h4>
      <ul className="list-group sw-list-group--padding-right">
        { Children.map(children, (child) => cloneElement(child, { item })) }
      </ul>
    </Fragment>
  );

  return (
    <RowDouble
      left={ imageComponent } leftSize= { 4 }
      right={ details } rightSize={ 8 } />
  );
}

export default DetailsList;
