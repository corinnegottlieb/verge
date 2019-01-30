import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="search" placeholder="search"></input>
        <button className="btn waves-effect waves-light">verge to search</button>
      </div>
    )
  }
}

/*
To do
- button functionality
*/