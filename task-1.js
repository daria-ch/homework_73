const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello!');
});

app.get('/:name', (req, res) => {
    res.send(req.params.name);
});

app.listen(port, () => {
    console.log('This is port: ' + port);
});