'use strict'

const pkg = require('./../package.json')

module.exports = (req, res) => {
  res.send(`Staticman version ${pkg.version}!`)
}
