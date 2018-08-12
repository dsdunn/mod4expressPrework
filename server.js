const express = require('express');
const app = express();

const urlLogger = (request, response, next) => {
  console.log('Request Url:' , request.url);
  next();
};
const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
}

app.get('/json', (request, response) => {
  response.status(200).sendFile('public/lorem.json',{root: __dirname});
});

app.get('/sunsets', (request, response) => {
  response.sendFile('public/sunsets.html', {root: __dirname});
})

app.use(urlLogger, timeLogger);
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

