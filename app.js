'use strict'
const express = require('express')
const cfg = require('./server/cfg')
const path = require('path')

let app = express()
let assets = '/src/assets'

app.use('/dist', express.static(__dirname + '/dist'))
app.use('/css', express.static(__dirname + assets + '/css'))
app.use('/partials', express.static(__dirname + assets + '/partials'))

app.all('/*', (req, res, next) => {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname })
})

app.listen(cfg.port, () => {
    console.log(`Server running at port ${cfg.port}`)
})