var express = require('express');
var bodyParser = require('body-parser');
var app = express();

    //Logger middleware
    app.use('/', (req, res, next) => {
      console.log(`${req.method} ${req.path} - ${req.ip}`)
      next();
    })

    
    app.use('/', bodyParser.urlencoded({extended: false}));

    //Serve css
    app.use('/public', express.static(__dirname + '/public'))

    //Serve name
    app.get('/name', (req, res) => {
        res.json({"name": `${req.query.first} ${req.query.last}`})
      })

    //Serve echo
    app.get('/:word/echo', (req, res) => {
      res.json({"echo": req.params.word})
    })

    //Serve current time
    app.get('/now', (req, res, next) => {
      req.time = new Date().toString();
      next();
    }, (req, res) => {
      res.json({"time": req.time});
    })

    //Serve json based on .env
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