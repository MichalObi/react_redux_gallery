import React, { Component } from 'react';

class GalleryItemDetails extends Component {
  state = {details: {}}

  componentDidMount() {
    fetch(`/gallery/item/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(details => this.setState({details}));
  }

  removeGalleryItem(id) {
    var request = new XMLHttpRequest();
    request.open('DELETE', `/gallery/item/${id}`, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send();
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
