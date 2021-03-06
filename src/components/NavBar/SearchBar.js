import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom'

@inject("lumberYard")
@observer
class SearchBar extends Component {

  handleSearchInput = (e) => {
    this.props.lumberYard.handleSearchInput(e.target.value)
  }

  sendSearch = () => {
    this.props.lumberYard.getNewTOR()
  }

  enterToSend = (e) => {
    if (e.key === 'Enter') {
      this.sendSearch();
      return <Link to='/TOR'></Link>
    }
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="searchThing">
            <input type="search"
              value={this.props.lumberYard.searchValue}
              placeholder="search" onChange={this.handleSearchInput}
              onKeyDown={this.enterToSend}></input>
          </label>
          <Link to='/TOR'>
            <button onClick={this.sendSearch} id="searchThing"
              className="search-button brown-text text-darken-4 btn waves-effect waves-light #4db6ac teal lighten-2">
              verge to search</button>
          </Link>
          <Link to='./TORList'>
            <button id="loadSaved"
              className="right brown-text text-darken-4 btn-small waves-effect waves-light #4db6ac teal lighten-2">
              Load Saved</button>
          </Link>
        </form>
      </div>
    )
  }
}

export default SearchBar;
