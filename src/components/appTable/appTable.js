import React, { Component } from 'react';
import './appTable.css';
import AppTableRow from '../appTableRow';

export default class AppTable extends Component {

  render() {
    const { stats, onDeleted } = this.props;

    const elements = stats.map((item) => {
      return (
        <AppTableRow 
          key={ item.id } 
          item={ item }
          onDeleted={() => onDeleted(item.id)}/>
      );
    });

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Repository name</th>
            <th scope="col">Stars</th>
          </tr>
        </thead>
        <tbody>
          { elements }
        </tbody>
      </table>
    );
  }
};