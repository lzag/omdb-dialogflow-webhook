const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

app.use(basicAuth({
  users: {
    [process.env.AUTH_USER]: process.env.AUTH_PASS,
  },
}));

app.use('/', (req, res) => {
  if (req.header('x-dialogflow-validation') === process.env.AUTH_HEADER) {
    res.send('Hello World!');
  }
});


module.exports = {
  app,
};
