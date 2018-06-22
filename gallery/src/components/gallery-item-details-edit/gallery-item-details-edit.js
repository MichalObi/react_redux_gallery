import React, {Component} from 'react';

class GalleryItemDetailsEdit extends Component {
  state = {msg: null}

  submitEditGalleryItem() {
    console.log('text');
  }

  render() {
    return(
      <div className="gallery__edit">
        <input type="text" />
        <button onClick={() => this.submitEditGalleryItem()}>Save</button>
      </div>
    );
  }
}

export default GalleryItemDetailsEdit
