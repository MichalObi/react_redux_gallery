import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';

class GalleryItem extends Component {
  render() {
    return (
      <div>
        {this.props.gallery.length === 0 ? (
          <div>loading ...</div>
        ) : (
          this.props.gallery.map(item =>
            <Link to={{pathname: '/gallery/item/' + item.id }}
                  className="gallery__item"
                 key={item.id} id={item.id}>
              <span>{item.description}</span>
            </Link>
          )
        )}
      </div>
    );
  }
}

export default GalleryItem;
