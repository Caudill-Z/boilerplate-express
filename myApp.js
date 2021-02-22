var express = require('express');
var app = express();

    //Serve css
    app.use('/public', express.static(__dirname + '/public'))

    //Serve html
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/views/index.html')
    })

    //Serve string
    // app.get('/', (req, res) => {
    //     res.send('Hello Express');
    // })

 module.exports = app;
 