// implement your API here
const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Hey all y\'all!')
});

server.get('/what', (req, res) => {
    res.send('What you want, Earl?')
});

server.listen(8000, () => console.log('API running on port 8000'));