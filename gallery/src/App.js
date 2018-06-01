import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {gallery: []}

  componentDidMount() {
    fetch('/gallery')
    .then(res => res.json())
    .then(gallery => this.setState({gallery}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React-redux gallery</h1>
        </header>

        <h1>Gallery items:</h1>

        <div className="gallery">
          {this.state.gallery.map(item =>
            <div className="gallery__item" key={item.id} id={item.id}>
              <span>{item.description}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
