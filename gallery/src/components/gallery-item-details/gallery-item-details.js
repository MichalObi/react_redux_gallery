import React, { Component } from 'react';

class GalleryItemDetails extends Component {
  state = {details: {}}

  componentDidMount() {
    fetch(`/gallery/item/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(details => this.setState({details}));
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
            <button>Edit</button>
            <button onClick={() => this.removeGalleryItem(id)}>Remove</button>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryItemDetails;
