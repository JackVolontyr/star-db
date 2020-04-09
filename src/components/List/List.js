import React from 'react';
import PropTypes from 'prop-types';
import { HocData, HocCheckRender } from '../HocHelpers';
import './List.css';
import { withRouter } from 'react-router-dom';

const List = (props) => {
  const { data: { result: items }, clickOnItem, children } = props;

  const prepareItems = (items) => items.map(
    // (item) => <li onClick={ () => clickOnItem(item.id) } className="list-group-item" key={ item.id }>
    (item) => <li onClick={ () => clickOnItem(item) } className="list-group-item" key={ item.id }>
      {children(item)}
      {/* <div>Go to the <Link to={`/${item.root}/${item.id}`}>/{item.root}/{item.id}</Link></div> */}
    </li>
  );

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
  HocCheckRender(
    withRouter(List), 
    "sw-block sw-list jumbotron list-group rounded", 'ul'
  ),
  true
);
