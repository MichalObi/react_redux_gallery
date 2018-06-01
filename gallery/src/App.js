import React, { Component } from 'react';
import Gallery from './components/gallery/gallery.js'

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React-redux gallery</h1>
        </header>
        <Gallery />
      </div>
    );
  }
}

export default App;
