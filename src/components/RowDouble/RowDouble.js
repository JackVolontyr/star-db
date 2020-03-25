import React from 'react';
import './RowDouble.css';

const RowDouble = ({ left, leftSize, right, rightSize }) => {
  return (
    <div className="row mb2">
      <div className={ `col-md-${leftSize}` }>{ left }</div>
      <div className={ `col-md-${rightSize}` }>{ right }</div>
    </div>
  );
}
export default RowDouble;
