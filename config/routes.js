'use strict'

const APIV = process.env.API_V

const routes = (app) => {
  // Authentication
  app.use(`/api/${APIV}/auth`, require('../middleware/auth'))

  // Token Checker
  app.use(`/api/${APIV}/*`, require('../middleware/token'))
}

module.exports.init = routes
