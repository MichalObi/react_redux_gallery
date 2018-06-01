import React, { Component } from 'react';

class GalleryItem extends Component {
  render() {
    return (
      <div>
        {this.props.gallery.length === 0 ? (
          <div>loading ...</div>
        ) : (
          this.props.gallery.map(item =>
            <div className="gallery__item" key={item.id} id={item.id}>
              <span>{item.description}</span>
            </div>
          )
        )}
      </div>
    );
  }
}

export default GalleryItem;
