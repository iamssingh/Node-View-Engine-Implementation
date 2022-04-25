const express = require('express');
const path = require('path');

const app = express();
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.listen(5000, () => {
  console.log('App is listening on port 5000');
});