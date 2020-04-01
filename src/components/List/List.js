import React from 'react';
import { HocData, HocCheckRender } from '../HocHelpers';
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

List.defaultProps = {
  clickOnItem: (id) => console.log(id)
}

export default HocData(
  HocCheckRender(List, "sw-block sw-list jumbotron list-group rounded", 'ul'),
  true
);
