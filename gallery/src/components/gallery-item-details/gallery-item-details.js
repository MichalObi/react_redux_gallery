import React, { Component } from 'react';

class GalleryItemDetails extends Component {
  state = {details: {}}

  componentDidMount() {
    fetch(`/gallery/item/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(details => this.setState({details}));
  }

  render() {
    return(
      <div>
        <div className="gallery__item-details">
          <span>{this.state.details.id}</span>
          <p>{this.state.details.description}</p>
        </div>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    );
  }
}

export default GalleryItemDetails;
