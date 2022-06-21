import React from 'react';
import { Link } from 'react-router-dom';
import { webRoot } from '../../utils';

import './Header.css';

const Header = ({ changeService, serviceTextInfo }) => {
	return (
		<div className="d-flex sw-header">
			<h3><Link to={`${webRoot}/`}>StarDB</Link></h3>
			<ul className="d-flex sw-nav">
				<li><Link to={`${webRoot}/people/`}>People</Link></li>
				<li><Link to={`${webRoot}/planets/`}>Planets</Link></li>
				<li><Link to={`${webRoot}/starships/`}>Starships</Link></li>
			</ul>
			<button
				onClick={changeService} 
				className="btn btn-primary btn-sm"
			>
				Change Service (current: {serviceTextInfo})
			</button>
		</div>
	);
}

export default Header;
