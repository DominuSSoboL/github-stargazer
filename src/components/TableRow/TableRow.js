import React, { Component } from 'react';

import NumberFormat from 'react-number-format';

export default class AppTableRow extends Component {
  render() {
    const { label, stars } = this.props.item;
    const { onDelete } = this.props;
    return (
      <tr>
        <td>{label}</td>
        <td>
          <NumberFormat 
            value={stars} 
            displayType='text' 
            thousandSeparator
          />
          <button 
            className="remuve-repository"
            aria-label="Remove this repository from the table"
            onClick={onDelete} >
              <span />
          </button>
        </td> 
      </tr>
    );
  };
};
