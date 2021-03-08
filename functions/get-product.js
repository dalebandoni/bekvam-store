const products = require('./data/products.json')

exports.handler = async (event, context) => {
  const id = event.queryStringParameters.id
  const singleProduct = products.filter(product => product.id === id)[0]
  return {
    statusCode: 200,
    body: JSON.stringify(singleProduct),
  }
}
