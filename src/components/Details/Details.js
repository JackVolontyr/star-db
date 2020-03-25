import React, { Component } from 'react';

import Spinner from '../Spinner';
import ViewError from '../ViewError';
import DetailsList from '../DetailsList';

import './Details.css';

export default class Details extends Component {
  state = { item: null, isLoading: false, isError: false, }

  itemLoaded = (item) => this.setState({ item, isLoading: false, isError: false })

  catchError = (err) => this.setState({ isLoading: false, isError: true })

  updateItem = () => {
    const { getDataItem, itemId } = this.props;
    if (itemId) getDataItem(itemId).then(this.itemLoaded).catch(this.catchError)
  }

  componentDidMount() { this.updateItem(); }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ isLoading: true });
      this.updateItem();
    }
  }

  componentWillUnmount() {}

  render() {
    const { item, isLoading, isError } = this.state;
    const {
      defaultMessage = 'Select a item from list.',
      imageString, imageData, children
    } = this.props;

    if (!item && !isLoading) {
      return (
        <div className="sw-block sw-block--padding jumbotron rounded">
          <span>{ defaultMessage }</span>
        </div>
      );
    };

    const isHasData = !(isLoading || isError);
    const spinner = isLoading ? <Spinner /> : null;
    const content = isHasData ? (
      <DetailsList
        imageString={ imageString }
        imageData={ imageData }
        item={ item }>
        { children }
      </DetailsList>
    ) : null;
    const errorMessage = !isLoading && isError ?
      <ViewError theme={ 'padding' } /> : null;

    return (
      <div className="sw-block jumbotron rounded">
        { spinner }
        { content }
        { errorMessage }
      </div>
    );
  }
}
