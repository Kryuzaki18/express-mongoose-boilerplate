'use strict'

require('dotenv').config()
const port = process.env.PORT
const APIV = process.env.API_V

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = require('./config/db')
db.connect().then(
  () => {
    // Cors(Cross-Origin-Resource-Sharing)
    const cors = require('./config/cors')
    cors.init(app)

    // Routes
    const routes = require('./config/routes')
    routes.init(app)

    // Controllers
    const controllers = require('./controllers')
    controllers.init(app)

    // Welcome response
    app.use('/', (req, res, next) => {
      res.status(200).json({ msg: 'Welcome to api' + APIV })
    })

    // Listen Express App
    app.listen(port, () => {
      console.log(
        '\x1b[33m%s\x1b[0m',
        `API is running`
      )
    })
  }).catch(() => {
    console.log('\x1b[31m', '\n500 Internal Server Error.\n')
    process.exit(0)
  }
)
