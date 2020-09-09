// requries
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg'); // talks to db

// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// globals
const port = 3000;

// spin
app.listen(port, () => {
    console.log('server up:', port);
}) // end server up

app.get('/songs', (req, res) => {
    console.log('in/songs GET');
    res.send('ribbet')
}) // end /songs GET

app.post('/songs', (req, res) => {
    console.log('in/songs post:', req.body);
    res.send('chirp')
}) // end /songs POST