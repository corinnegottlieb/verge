import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar';
import BackButton from './BackButton';
import LoadSaved from './LoadSaved';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper #00897b teal darken-1">
            <Link to="./">
              <a className="brand-logo center">.VERGE</a>
            </Link>
          </div>
        </nav>
        <SearchBar />
        <BackButton />
        <LoadSaved />
      </div>
    )
  }
}