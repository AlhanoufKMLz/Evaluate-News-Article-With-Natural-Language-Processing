const PORT = 8081;

var express = require('express');
const path = require('path');
var cors = require('cors');

const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({
    extended: true
  }))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    res.sendFile(path.resolve('src/client/views/index.html'));
})

// a route that handling post request for new URL that coming from the frontend
const { default: axios } = require("axios");

const {
  API_KEY, ANALYSIS_API,
} = process.env;

app.post('/analyse', async (req, res) => {
  const { body: { url } } = req;
  const apiUrl = `${ANALYSIS_API}?key=${API_KEY}&url=${url}&lang=en`
  const response = await axios.post(apiUrl);
  const result = response.data;
  res.send(result);
});


app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
      console.log(`Server listening on port ${PORT}!`);
})

// export app to use it in the unit testing
module.exports = {
  app,
}