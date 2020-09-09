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

// db setup
const Pool = pg.Pool;
// configure connectio to db
const pool = new Pool({
    database: "music_library", // db name (not the table name)
    host: "localhost", // default  when running locally, will change when deployed
    port: 5432, // default port for local, also will change when deployed
    max: 12, // max # of connections
    idleTimeoutMillis: 20000 // connection timeout in milliseconds
}); // end pool setup

// spin
app.listen(port, () => {
    console.log('server up:', port);
}) // end server up

app.get('/songs', (req, res) => {
    console.log('in/songs GET');
    // test query: top 40 songs by rank
    // SELECT * FROM "songs" ORDER BY "rank" DESC LIMIT 40;
    const queryString = 'SELECT * FROM "songs" ORDER BY "rank" DESC LIMIT 40;';
    pool.query(queryString).then((results) => {
        res.send(results.rows); // runs if query was successful
    }).catch((err) => {
        console.log(err); // if there was an error running query
        res.sendStatus(500);
    }) // end query
}) // end /songs GET

app.post('/songs', (req, res) => {
    console.log('in/songs post:', req.body);
    // create query string
    // ask pool to run our query string
    // rank: '4', artist: 'hi', track: 'd', published: '2020-09-24' }
    res.send('chirp')
}) // end /songs POST