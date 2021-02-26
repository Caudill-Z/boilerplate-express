var express = require('express');
var app = express();

    //Logger middleware
    app.use('/', (req, res, next) => {
      console.log(`${req.method} ${req.path} - ${req.ip}`)
      next();
    })

    //Serve css
    app.use('/public', express.static(__dirname + '/public'))

    //Serve json
    app.get('/json', (req, res) => {
        let message = {"message": "Hello json"}
        if(process.env.MESSAGE_STYLE === 'uppercase'){
            message.message = "HELLO JSON"
        }
        res.json(message);
    })

    //Serve html
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/views/index.html')
    })

    //Serve string
    // app.get('/', (req, res) => {
    //     res.send('Hello Express');
    // })

module.exports = app;