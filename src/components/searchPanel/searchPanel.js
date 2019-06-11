import React, { Component } from 'react';

import './searchPanel.css';

export default class SearchPanel extends Component {
  state = {
    label: ''
  }

  get errorClassName() {
    const { showError } = this.props; 

    return showError ? 'error-message active' : 'error-message'
  }

  handleChange = (e) => {
    this.setState({
      label: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addRepository(this.state.label);
    this.props.hiddenError();
    this.setState({
      label: ''
    });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <input 
            className="form-control"
            type="text" 
            placeholder="Enter repository name, e.g. rubygarage/truemail"
            value={this.state.label}
            onChange={this.handleChange}
          />
          <input 
            className="btn btn-primary" 
            type="submit" 
            value="Add"
            onClick={this.handleSubmit}
          />
        </form>
        <p className={this.errorClassName}>Repository not found</p>
      </React.Fragment>
    );
  };
};
