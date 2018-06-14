import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Header from './Header';
import Gallery from './components/gallery/gallery.js'
import GalleryItemDetails from './components/gallery-item-details/gallery-item-details.js';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Header/>
      <Route path="/gallery" component={Gallery} exact/>
      <Route path="/gallery/item/:id" component={GalleryItemDetails} exact/>
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
