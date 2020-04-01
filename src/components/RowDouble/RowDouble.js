import React from 'react';
import PropTypes from 'prop-types';
import './RowDouble.css';

const RowDouble = ({ left, leftSize, right, rightSize }) => <div className="row mb2">
  <div className={ `col-md-${leftSize}` }>{ left }</div>
  <div className={ `col-md-${rightSize}` }>{ right }</div>
</div>

RowDouble.propTypes = {
  left: PropTypes.node,
  // left: PropTypes.element, React element
  leftSize: PropTypes.number,
  right: PropTypes.node,
  rightSize: PropTypes.number,
};


// MyComp.propTypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string,
//     role: PropTypes.oneOf(['user', 'admin']),
//   })
// };

export default RowDouble;
