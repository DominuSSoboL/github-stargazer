import React, { Component } from 'react';
import './appTableRow.css';

export default class AppTableRow extends Component {

  render() {
    const { id, label, stars } = this.props.item;
    const { onDeleted } = this.props;
    return (
      <tr key={ id }>
        <td>{ label }</td>
        <td>{ stars }
          <button className="remuve-repository"
                  aria-label="Remove this repository from the table"
                  onClick={onDeleted} >
              <span></span>
          </button>
        </td> 
      </tr>
    )
  }
}