import React, { Component } from 'react';
import './app.css';

import AppHeader from '../appHeader';
import SearchPanel from '../searchPanel';
import AppTable from '../appTable';
import GithubStargazerService from '../../services/githubStargazerService';



export default class App extends Component {

  githubStargazer = new GithubStargazerService();

  state = {
    stats: [],
    error: false
  };

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
  };

  offError = (bln) => {
    this.setState(({error}) => {
      return {
        error: false
      }
    });
  }

  onError = (err) => {
    this.setState(({error}) => {
      return {
        error: true
      }
    });
  };

  findeRepository = (url) => {
    // Test uniqueness URL
    const uniquenessURLTest = this.state.stats.findIndex((el) => el.label === url);
    if(!uniquenessURLTest) { 
      return;
    }

    if(url === ''){
      return;
    }

    this.githubStargazer
      .getResource(url)
      .then((res) => {
        this.setState(({ stats }) => {
          let newArrey = [
            ...stats.slice(0), 
            { label: res.full_name, stars: res.stargazers_count, id: res.id }
          ];
          const sortArrey = newArrey.sort(function(a, b) {return b.stars - a.stars });
          return {
            stats: sortArrey
          }
        });
      })
      .catch(this.onError);
  };

  render(){
    return (
      <div className="container">
        <AppHeader />
        <SearchPanel 
          addRepository={this.findeRepository}
          error={this.offError}
          errorText={this.state.error}/>
        <AppTable 
          stats={ this.state.stats } 
          onDeleted={this.onDeleted}/>
      </div>
    );
  };
  
};