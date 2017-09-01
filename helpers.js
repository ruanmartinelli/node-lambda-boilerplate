function httpSuccess (result = {}) {
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(result)
  }
}

module.exports = { httpSuccess }
