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
        <div>
          <h1>Gallery items:</h1>
          {this.state.gallery.map(item =>
            <div key={item.id}>
              {item.description}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
