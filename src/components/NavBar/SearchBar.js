import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("TESTstore", "SearchHandler")
@observer
class SearchBar extends Component {

  handleInput = (e) => {
    this.props.SearchHandler.handleInput(e.target.value)
  }

  sendSearch = () => {
    console.log(this.props.SearchHandler.value)

  }

  render() {
    return (
      <div>
        <input type="search" placeholder="search" onChange={this.handleInput}></input>
        <button onClick={this.sendSearch} className="btn waves-effect waves-light">verge to search</button>
      </div>
    )
  }
}

export default SearchBar
