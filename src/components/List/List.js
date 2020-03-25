import React from 'react';
import HocData from '../HocData';
import HocCheckRender from '../HocCheckRender';
import './List.css';

const List = (props) => {
  const { data: { result: items }, clickOnItem, children } = props;

  const prepareItems = (items) => {
    return items.map(
      (item) => <li onClick={ () => clickOnItem(item.id) } className="list-group-item" key={ item.id }>
        { children(item) }
      </li>
    );
  };

  return prepareItems(items);
}

export default HocData(
  HocCheckRender(List, "sw-block sw-list jumbotron list-group rounded", 'ul'),
  true
);
