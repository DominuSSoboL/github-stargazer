import React, { Component } from 'react';

import './appTable.css';
import TableRow from '../TableRow';

export default class AppTable extends Component {
  render() {
    const { stats, onDelete } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Repository name</th>
            <th scope="col">Stars</th>
          </tr>
        </thead>
        <tbody>
          { 
            stats.map((item) => (
              <TableRow 
                key={item.id} 
                item={item}
                onDelete={() => onDelete(item.id)}/>
            ))
          }
        </tbody>
      </table>
    );
  }
};
