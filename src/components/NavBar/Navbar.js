import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper #80cbc4 teal lighten-3">
            <Link to="./">
              <div className="brown-text text-darken-4 brand-logo center">.VERGE</div>
            </Link>
            <Link to='./TORList'>
              <button id="loadSaved" className="brown-text text-darken-4 btn-small waves-effect waves-light #4db6ac teal lighten-2">Load Saved</button>
            </Link>
          </div>
        </nav>
        <SearchBar />
      </div>
    )
  }
}

export default NavBar