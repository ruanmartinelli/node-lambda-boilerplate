const fs = require('fs')
const http = require('http')
const { httpSuccess } = require('./helpers')

function lambda(event, context, callback) {

  callback(null, httpSuccess())
}

exports.handler = lambda
