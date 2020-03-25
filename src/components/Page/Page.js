import React, { Component } from 'react';

import List from '../List';
import Details from '../Details';
import ErrorButton from '../ErrorButton';
import RowDouble from '../RowDouble';
import ErrorCatcher from '../ErrorCatcher';

import './Page.css';

export default class Page extends Component {
  state = { itemId: null, };

  clickOnItem = (id) => { this.setState({ itemId: id }) }

  render () {
    const {
      imageString, imageData,
      renderItem, children,
      getDataList, getDataItem,
    } = this.props;

    const { itemId } = this.state;

    const list = (
      <List
        getDataList={ getDataList }
        clickOnItem={ this.clickOnItem }>
        { renderItem }
      </List>
    );

    const details = (
      <ErrorCatcher className="sw-block sw-block--padding jumbotron rounded">
        <Details
          getDataItem={ getDataItem }
          imageString={ imageString }
          imageData={ imageData }
          renderItem={ renderItem }
          itemId={ itemId }>
          { children }
        </Details>

        <ErrorButton />
      </ErrorCatcher>
    );

    return (
      <RowDouble
        left={ list } leftSize= { 4 }
        right={ details } rightSize={ 8 } />
    );
  }
}
