const express = require('express');
const app = express();import {} from 'express';

app.get('/', (req, res) => {
    res.send("Hello world");
});

const port = process.env.port || 300;

app.listen(port, () =>{
    console.log('server running on https://localhost:$(port)');
})