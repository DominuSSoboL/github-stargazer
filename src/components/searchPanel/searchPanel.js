import React, { Component } from 'react';
import './searchPanel.css';

export default class SearchPanel extends Component {

  state = {
    label: ''
  }

  onChange = (e) => {
    this.setState({
      label: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addRepository(this.state.label);
    this.setState({
      label: ''
    });
  }

  render() {
    return (
      <form method="get" 
            action=""
            onSubmit={this.onSubmit}>
        <input className="form-control"
               type="text" 
               placeholder="Enter repository name, e.g. rubygarage/truemail"
               value={this.state.label}
               onChange={this.onChange}/>
        <input className="btn btn-primary" 
               type="submit" 
               value="Add"
               onClick={this.onSubmit}/>
      </form>
    );
  };
};