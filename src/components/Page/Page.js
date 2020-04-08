import React, { Component } from 'react';

import List from '../List';
import Details from '../Details';
import ErrorButton from '../ErrorButton';
import RowDouble from '../RowDouble';
import ErrorCatcher from '../ErrorCatcher';

import './Page.css';

export default class Page extends Component {
  state = { itemId: null }
  clickOnItem = (itemId) => { this.setState({ itemId }) }
  getDataPromise = (itemId) => { if (itemId || itemId === 0) return this.props.getDataItem(itemId) }

  render () {
    const {
      imageString, imageData,
      renderItem, children,
      getDataList,
    } = this.props;

    const { itemId } = this.state;

    const list = <List
      dataPromise={ getDataList() }
      clickOnItem={ this.clickOnItem }>
      { renderItem }
    </List>

    const details = <ErrorCatcher className="sw-block sw-block--padding jumbotron rounded">
      <Details
        dataPromise={ this.getDataPromise(itemId) }
        imageString={ imageString }
        imageData={ imageData }
        itemId={ itemId }>
        { children }
      </Details>

      <ErrorButton />
    </ErrorCatcher>

    return <RowDouble left={ list } leftSize= { 4 } right={ details } rightSize={ 8 } />
  }
}
