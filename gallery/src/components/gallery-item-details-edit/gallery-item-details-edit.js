import React, {Component} from 'react';

class GalleryItemDetailsEdit extends Component {
  state = {msg: ''}

  submitEditGalleryItem() {
    var id = this.props.itemId;
    fetch(`/gallery/item/update/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'charset': 'UTF-8'
      },
      body: JSON.stringify({newDesc: this.state.msg})
    })
    .then(res => res.json())
    .then((res) => {
      if (res.status === 'updated') {

      }
    });
  }

  handleChange(e) {
    this.setState({msg: e.target.value});
  }

  render() {
    return(
      <div className="gallery__edit">
        <input type="text" placeholder="type new input" onChange={ this.handleChange.bind(this) }/>
        <button onClick={() => this.submitEditGalleryItem()}>Save</button>
      </div>
    );
  }
}

export default GalleryItemDetailsEdit
