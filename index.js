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
  function getNewElementId() {
    return dumpGalleryArray.length > 0 ? dumpGalleryArray.slice(-1)[0].id + 1 : 1;
  }
  var lastGalleryItemId = getNewElementId();
  var newGalleryObj = {
    id: lastGalleryItemId,
    description: 'test' + ' ' + lastGalleryItemId
  };
  dumpGalleryArray.push(newGalleryObj);
  res.json({status: 'created'});
});

app.delete('/gallery/item/:id', (req, res) => {
  var reqId = req.params.id;

  function filterItemToDelete(item) {
    return parseInt(item.id) !== parseInt(reqId);
  }

  dumpGalleryArray = dumpGalleryArray.filter(filterItemToDelete);
  res.json({status: 'deleted'});
});

app.put('/gallery/item/:update:id', (req, res) => {
  res.json({status: 'updated'});
});

app.get('*', (req, res) => {
  res.redirect(404, '/gallery');
});

app.listen(3000, () => console.log('app started'));
