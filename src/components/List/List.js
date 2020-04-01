import React from 'react';
import PropTypes from 'prop-types';
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

// static
List.defaultProps = {
  clickOnItem: (id) => console.log(id)
}

List.propTypes = {
  clickOnItem: PropTypes.func,
  // data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
}

export default HocData(
  HocCheckRender(List, "sw-block sw-list jumbotron list-group rounded", 'ul'),
  true
);
