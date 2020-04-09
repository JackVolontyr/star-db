import React from 'react';
import { withRouter } from 'react-router-dom';

import List from '../List';
import Details from '../Details';
import ErrorButton from '../ErrorButton';
import RowDouble from '../RowDouble';
import ErrorCatcher from '../ErrorCatcher';


import './Page.css';

const Page = ({match: {params: {id: itemId}}, history, imageString, imageData, renderItem, children, getDataList, getDataItem }) => {

  // clickOnItem = (itemId) => { this.setState({ itemId }) }
  const clickOnItem = (item) => history.push(`/${item.root}/${item.id}`)
  const getDataPromise = (itemId) => { if (itemId || itemId === 0) return getDataItem(itemId) }

  const list = <List
    dataPromise={ getDataList() }
    clickOnItem={ clickOnItem }>
    { renderItem }
  </List>

  const details = <ErrorCatcher className="sw-block sw-block--padding jumbotron rounded">
    <Details
      dataPromise={ getDataPromise(itemId) }
      imageString={ imageString }
      imageData={ imageData }
      itemId={ itemId }>
      { children }
    </Details>

    <ErrorButton />
  </ErrorCatcher>

    // return list;
  return <RowDouble left={ list } leftSize= { 4 } right={ details } rightSize={ 8 } />
}

export default withRouter(Page);
