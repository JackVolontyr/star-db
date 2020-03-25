import React from 'react';
import './ItemField.css';

const ItemField = ({ item, field, label }) => <li className="list-group-item">
    <span className="term">{ label }: </span>
    <span>{ item[field] }</span>
</li>

export default ItemField;
