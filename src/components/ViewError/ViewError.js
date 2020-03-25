import React from 'react';
import './ViewError.css';

const ViewError = ({ theme }) => {
  const className = `sw-view-error ${ theme ? 'sw-view-error--' + theme : ''}`;
  return <div className={ className }>Something went wrong..</div>;
}
export default ViewError;
