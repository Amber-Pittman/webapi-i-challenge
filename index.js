// implement your API here

// import express into the file
const express = require('express');

// create the server
const server = express();

server.get('/', (req, res) => {
    res.send('Hey all y\'all!')
});

server.get('/what', (req, res) => {
    res.send('What you want, Earl?')
});

server.get('/hobbits', (req, res) => {
    const hobbits = [
        {
            id: 1,
            name: 'Samwise Gamgee',
        },
        {
            id: 2,
            name: 'Frodo Baggins',
        },
    ]

    // set headers
    res.status(200).json(hobbits)
})

// get server to listen for people looking for our specific server
server.listen(8000, () => console.log('API running on port 8000'));