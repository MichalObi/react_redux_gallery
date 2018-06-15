import React, { Component } from 'react';
import GalleryItem from '../gallery-item/gallery-item.js'
import '../../styles/gallery.css';

class Gallery extends Component {
  state = {gallery: []};

  getGalleryItems() {
    fetch('/gallery')
      .then(res => res.json())
      .then(gallery => this.setState({gallery}));
  }

  addNewGaleryItem() {
    var data = {description: 'user created item'};
    fetch('/gallery/create', {
      method: 'POST',
      body: data,
      headers: {
        'content-type': 'application/json',
        'charset': 'UTF-8'
      }
    })
    .then(res => res.json())
    .then(res => {
      if (res.status === 'created') {
        this.getGalleryItems();
      }
    })
  }

  componentDidMount() {
    this.getGalleryItems();
  }

  render() {
    return (
      <div>
        <h1>Gallery items:</h1>
        <div className="gallery">
          <GalleryItem gallery={this.state.gallery}/>
        </div>
        <div className="gallery__buttons">
          <button onClick={this.addNewGaleryItem.bind(this)}>Add new gallery item</button>
        </div>
      </div>
    );
  }
}

export default Gallery;
