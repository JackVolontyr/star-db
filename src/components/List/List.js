import React from 'react';
import HocData from '../HocData';
import HocCheckRender from '../HocCheckRender';
import './List.css';

const List = (props) => {
  const { data: { items }, clickOnItem, children } = props;

  const prepareItems = (items) => {
    return items.map(
      (item) => <li onClick={ () => clickOnItem(item.id) } className="list-group-item" key={ item.id }>
        { children(item) }
      </li>
    );
  };

  return <ul className="sw-block sw-list jumbotron list-group rounded">{ prepareItems(items) }</ul>;
}

export default HocData(HocCheckRender(List));
