const fs = require('fs')
const http = require('http')
const { httpSuccess } = require('./helpers')

function lambda(event, context, callback) {
  const response = {
    success: true,
    message: 'hello lambda'
  }

  callback(null, httpSuccess(response))
}

exports.handler = lambda
