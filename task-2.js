const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;


app.get('/encode/:name', (req, res) => {
    res.send(Vigenere.Cipher('password').crypt(req.params.name));
});

app.get('/decode/:name', (req, res) => {
    res.send(Vigenere.Decipher('password').crypt(req.params.name));
});

app.listen(port, () => {
    console.log('This is port: ' + port);
});