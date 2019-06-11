import React, { Component } from 'react';
import './app.css';

import AppHeader from '../appHeader';
import SearchPanel from '../searchPanel';
import AppTable from '../appTable';

export default class App extends Component {

  state = {
    stats: [
      { label: 'vuejs/vue', stars: '139913', id: '0' },
      { label: 'facebook/react', stars: '130129', id: '1' },
      { label: 'emberjs/ember.js', stars: '21005', id: '2' }
    ]
  };
  
  currentId = 3;

  onDeleted = (id) => {
    this.setState(({stats}) => {
      const idx = stats.findIndex((el) => el.id === id);
      const newArrey = [
        ...stats.slice(0, idx), 
        ...stats.slice(idx + 1)
      ];
      return {
        stats: newArrey
      }
    });
  }

  addRepository = (text) => {
    this.setState(({stats}) => {

      let randomCount = Math.floor(Math.random() * 150000) + 1; 
      let newArrey = [
        ...stats.slice(0), 
        { label: text, stars: randomCount, id: this.currentId }
      ];

      const sortArrey = newArrey.sort(function(a, b) {return b.stars - a.stars });
      
      return {
        stats: sortArrey
      }

    });
    this.currentId += 1;
  }

  render(){
    return (
      <div className="container">
        <AppHeader />
        <SearchPanel 
          addRepository={this.addRepository}/>
        <AppTable 
          stats={ this.state.stats } 
          onDeleted={this.onDeleted}/>
      </div>
    );
  };
  
};