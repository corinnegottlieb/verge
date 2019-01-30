import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("LumberYard")
@observer
class SearchBar extends Component {

  handleInput = (e) => {
    this.props.LumberYard.handleInput(e.target.value)
  }

  sendSearch = () => {
    // console.log(this.props.LumberYard.searchValue)
    this.props.LumberYard.getNewTOR(this.props.LumberYard.searchValue)
  }

  render() {
    return (
      <div>
        <input type="search" placeholder="search" onChange={this.handleInput}></input>
        <button onClick={this.sendSearch} className="brown-text text-darken-4 btn waves-effect waves-light #4db6ac teal lighten-2">verge to search</button>
      </div>
    )
  }
}

export default SearchBar
