import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar';
// import LoadSaved from './LoadSaved';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper #80cbc4 teal lighten-3">
            <Link to="./">
              <div className="brown-text text-darken-4 brand-logo center">.VERGE</div>
            </Link>
          </div>
        </nav>
        <SearchBar />
      </div>
    )
  }
}

export default NavBar