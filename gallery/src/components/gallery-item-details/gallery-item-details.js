import React, { Component } from 'react';
import GalleryItemDetailsEdit from '../gallery-item-details-edit/gallery-item-details-edit.js';

class GalleryItemDetails extends Component {
  state = {details: {}, showEditComponent: false}

  componentDidMount() {
    fetch(`/gallery/item/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(details => this.setState({details}));
  }

  editGalleryItem(id) {
    this.setState({showEditComponent: true});
  }

  removeGalleryItem(id) {
    fetch(`/gallery/item/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'charset': 'UTF-8'
      }
    })
    .then(res => res.json())
    .then((res) => {
      if (res.status === 'deleted') {
        this.props.history.push('/gallery')
      }
    });
  }

  render() {
    var id = this.state.details.id;
    return(
      <div>
        <h1>Gallery item details</h1>
        <div className="gallery__item-details">
          <span>{id}</span>
          <p>{this.state.details.description}</p>
          <div className="gallery__buttons">
            <button onClick={() => this.editGalleryItem(id)}>Edit</button>
            <button onClick={() => this.removeGalleryItem(id)}>Remove</button>
          </div>
        </div>
        { this.state.showEditComponent ? <GalleryItemDetailsEdit itemId={id}/> : null }
      </div>
    );
  }
}

export default GalleryItemDetails;
