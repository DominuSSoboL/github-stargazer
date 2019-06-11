import React, { Component } from 'react';

import './app.css';
import Header from '../Header';
import SearchPanel from '../SearchPanel';
import Table from '../Table';
import githubStargazer from '../../services/GithubAPIService';

export default class App extends Component {
  state = {
    stats: [],
    error: false
  };

  handleDelete = (id) => {
    this.setState(({stats}) => {
      const index = stats.findIndex((element) => element.id === id);
      const newStats = [
        ...stats.slice(0, index), 
        ...stats.slice(index + 1)
      ];
      return {
        stats: newStats
      }
    });
  };

  hiddenError = () => {
    this.setState(({error}) => ({error: false}));
  };

  showError = () => {
    this.setState(({error}) => ({error: true}));
  };

  findRepository = (url) => {
    const isUrlUniq = this.state.stats.findIndex((item) => item.label === url);

    if(!isUrlUniq || url === '') return;

    githubStargazer
    .getRepository(url)
    .then((response) => {
      this.setState(({ stats }) => {
        const newStats = [
          ...stats,
          {label: response.full_name, stars: response.stargazers_count, id: response.id}
        ];
        const sortStats = newStats.sort((a, b) => (b.stars - a.stars));
        return {
          stats: sortStats
        }
      });
    })
    .catch(this.showError);
  };

  render(){
    return (
      <div className="container">
        <Header />
        <SearchPanel 
          addRepository={this.findRepository}
          hiddenError={this.hiddenError}
          showError={this.state.error}
        />
        <Table 
          stats={this.state.stats} 
          onDelete={this.handleDelete}
        />
      </div>
    );
  };  
};
