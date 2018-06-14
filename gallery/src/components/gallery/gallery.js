import React, { Component } from 'react';
import GalleryItem from '../gallery-item/gallery-item.js'
import '../../styles/gallery.css';

class Gallery extends Component {
  state = {gallery: []}

  componentDidMount() {
    fetch('/gallery')
      .then(res => res.json())
      .then(gallery => this.setState({gallery}));
  }

  render() {
    return (
      <div>
        <h1>Gallery items:</h1>
        <div className="gallery">
          <GalleryItem gallery={this.state.gallery}/>
        </div>
        <button>Add new gallery item</button>  
      </div>
    );
  }
}

export default Gallery;
