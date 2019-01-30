import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar';
import LoadSaved from './LoadSaved';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper #00897b teal darken-1">
            <Link to="./">
              <div className="brand-logo center">.VERGE</div>
            </Link>
          </div>
        </nav>
        <SearchBar />
        <LoadSaved />
      </div>
    )
  }
}

export default NavBar