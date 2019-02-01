import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("lumberYard", "searchHandler")
@observer
class SearchBar extends Component {

  handleInput = (e) => {
    this.props.searchHandler.handleInput(e.target.value)
  }

  sendSearch = () => {
    // console.log(this.props.lumberYard.searchValue)
    this.props.searchHandler.getNewTOR()
  }

  render() {
    return (
      <div>
        <input type="search" value={this.props.searchHandler.searchInput} placeholder="search" onChange={this.handleInput}></input>
        <button onClick={this.sendSearch} className="brown-text text-darken-4 btn waves-effect waves-light #4db6ac teal lighten-2">verge to search</button>
      </div>
    )
  }
}

export default SearchBar;
