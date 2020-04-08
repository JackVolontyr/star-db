import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ changeService }) => {
  return (
    <div className="d-flex sw-header">
      <h3><Link to="/">StarDB</Link></h3>
      <ul className="d-flex sw-nav">
        <li><Link to="/people">People</Link></li>
        <li><Link to="/planets">Planets</Link></li>
        <li><Link to="/starships">Starships</Link></li>
      </ul>
      <button
        onClick={changeService} 
        className="btn btn-primary btn-sm"
      >
        Change Service
      </button>
    </div>
  );
}

export default Header;
