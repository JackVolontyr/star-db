import React, { Component } from 'react';

import Spinner from '../Spinner';
import ViewError from '../ViewError';

import './List.css';

export default class List extends Component {
  state = { item: null, isLoading: true, isError: false, };

  itemLoaded = (items) => this.setState({ items, isLoading: false, isError: false, })

  catchError = (err) => this.setState({ isLoading: false, isError: true })

  renderItem = (items) => {
    const { clickOnItem, children: renderItem } = this.props;

    return items.map((item) => {
      return (
        <li
          onClick={ () => clickOnItem(item.id) }
          className="list-group-item"
          key={ item.id }>
          { renderItem(item) }
        </li>
      );
    });
  };

  componentDidMount() {
    const { getDataList } = this.props;
    getDataList().then(this.itemLoaded).catch(this.catchError);
  };

  render() {
    const { items, isLoading, isError } = this.state;

    const isHasData = !(isLoading || isError);
    const spinner = isLoading ? <Spinner /> : null;
    const content = isHasData ? ( this.renderItem(items) ) : null;
    const errorMessage = !isLoading && isError ?
      <ViewError theme={ 'padding' } /> : null;

    return (
      <ul className="sw-block sw-list jumbotron list-group rounded">
        { spinner }
        { content }
        { errorMessage }
      </ul>
    );
  };
}
