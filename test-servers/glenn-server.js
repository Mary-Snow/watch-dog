const express = require('express');
const WatchDog = require('./../watchDog.js');
const path = require('path');
const app = WatchDog();

console.log('hello from glenn server');

// app.get('/', (req, res, next) => {
//   console.log('======GET /=====');
//   res.cookie('cookie1', 'hello world');
//   return next();
// }, (req, res, next) => {
//   res.send('response sent!');
// });

app.get('/', (req, res) => {
  console.log('getting /');
  res.redirect('/route');
})

app.get('/route', (req, res) => {
  console.log('getting /route');
  res.sendFile(path.resolve(__dirname + '/../testHtml/destination.html'));
})

const server = app.listen(3000, () => {
  console.log('Listening on port 3000');
})

