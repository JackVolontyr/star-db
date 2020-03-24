import React from 'react';

import './ErrorView.css';

const ErrorView = ({ theme }) => {
  return (
    <div className={`sw-error-view ${ theme ? 'sw-error-view--' + theme : ''}`}>
      Something went wrong..
      </div>
  );
}

export default ErrorView;
