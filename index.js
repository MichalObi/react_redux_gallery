var express = require('express');
var app = express();

app.get('/gallery', (req, res) => {
  console.log('gallery route here !');
  res.json([
    {id: 1, description: 'test 1'},
    {id: 2, description: 'test 2'},
    {id:3, description: 'test 3'}
  ]);
});

app.get('/item:id', (req, res) => {
  var itemId = req.params.id;
  res.send(`gallery item id ${itemId}`);
});

app.post('create', (req, res) => {
  res.send('item created');
});

app.delete('delete:id', (req, res) => {
  res.send('item deleted');
});

app.put('update:id', (req, res) => {
  res.send('item updated');
});

app.get('*', (req, res) => {
  res.redirect(404, '/gallery');
});

app.listen(3000, () => console.log('app started'));
