'use strict'

const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)
const APIV = process.env.API_V

/**
 * @param {Object} app - Express library
 */
const controllers = (app) => {
  fs.readdirSync(__dirname)
    .filter((file) => {
      return (
        file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
      )
    })
    .forEach((file) => {
      const newFile = file.split('.').slice(0, -1).join('.') || file
      const fileImport = require(`./${newFile}`)
      app.use(`/api/${APIV}/${newFile}`, fileImport)
    })
}

module.exports.init = controllers
