import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class SearchBar extends Component {

  handleInput = (e) => {
    this.props.lumberYard.handleInput(e.target.value)
  }

  sendSearch = () => {
    this.props.lumberYard.getNewTOR()
  }

  enterToSend = (e) => {
    if (e.key === 'Enter') {
      this.sendSearch()
    }
  }

  render() {
    return (
      <div>
        <input type="search" value={this.props.lumberYard.searchValue} placeholder="search" onChange={this.handleInput} onKeyDown={this.enterToSend}></input>
        <button onClick={this.sendSearch} className="brown-text text-darken-4 btn waves-effect waves-light #4db6ac teal lighten-2">verge to search</button>
      </div>
    )
  }
}

export default SearchBar;
