var express = require('express');
var app = express();

var dumpGalleryArray = [
  {id:1, description: 'test 1'},
  {id:2, description: 'test 2'},
  {id:3, description: 'test 3'}
];

app.get('/gallery', (req, res) => {
  res.json(dumpGalleryArray);
});

app.get('/gallery/item/:id', (req, res) => {
  var reqId = req.params.id;

  function getGalleryItem(item) {
    return parseInt(item.id) === parseInt(reqId);
  }

  var galleryItem = dumpGalleryArray.find(getGalleryItem);
  res.json({id: galleryItem.id, description: galleryItem.description});
});

app.post('/gallery/create', (req, res) => {
  var lastGalleryItemId = dumpGalleryArray.slice(-1)[0].id + 1;
  var newGalleryObj = {
    id: lastGalleryItemId,
    description: 'test' + ' ' + lastGalleryItemId
  };
  dumpGalleryArray.push(newGalleryObj);
  res.json(dumpGalleryArray);
});

app.delete('/gallery/item/:id', (req, res) => {
  var reqId = req.params.id;

  function getGalleryItem(item) {
    return parseInt(item.id) !== parseInt(reqId);
  }

  dumpGalleryArray = dumpGalleryArray.filter(getGalleryItem);
  console.log('dumpGalleryArray', dumpGalleryArray);
  res.json();
});

app.put('update:id', (req, res) => {
  res.send('item updated');
});

app.get('*', (req, res) => {
  res.redirect(404, '/gallery');
});

app.listen(3000, () => console.log('app started'));
