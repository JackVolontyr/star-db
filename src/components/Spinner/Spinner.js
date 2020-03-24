import React, { Component } from 'react';

import './Spinner.css';

const Spinner = () => {
  return (
    <div className="sw-spinner">
      <div className="sw-spinner__animation">
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
