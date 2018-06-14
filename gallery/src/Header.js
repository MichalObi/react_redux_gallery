import React, { Component } from 'react';
import './styles/App.css';
import {
  Link,
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="main-header">
      <Link to='/gallery'>
        <header className="App-header">
          <h1 className="App-title">React-redux gallery</h1>
        </header>
        </Link>
      </div>
    );
  }
}

export default Header;
