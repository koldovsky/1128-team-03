const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const Post = require('./models/post');

const app = express();

const db = 'mongodb+srv://softserv:kSr2oSntlRerPvkc@cluster0.ocz6fxl.mongodb.net/?retryWrites=true&w=majority';

mongoose
    .connect(db)
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error));

app.use(express.json());

app.use(express.static(path.resolve(__dirname, './')));

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0');

app.get('/api/chat', (req, res) => {
    const data = fs.readFileSync('./chat.txt', {encoding: 'utf-8', flag: 'r'});
    res.send({data});
});

app.post('/api/chat', (req, res) => {
    const {message} = req.body;
    const post = new Post({message});
    post
        .save()
        .then((result) => res.send(result))
        .catch((error) => {
            console.log(error);
        })
});
/*
app.post('/api/chat', (req, res) => {
    fs.appendFile('./chat.txt', req.body.message + '\n', err => {
        if (err) {
            res.send(500).send('Server Error');
        }
        const data = fs.readFileSync('./chat.txt', { encoding: 'utf-8', flag: 'r' });
        res.send({ data });
    })
});*/
