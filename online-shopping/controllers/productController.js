const Product = require('../model/product')

const getProduct = async (req, res) => {
  // const data = await Product
  res.send('get controller')
}

const createProduct = async (req, res) => {
  const { name, quality } = req.body

  const result = await Product.create({
    name: name,
    quality: quality,
  })
  console.log(result)

  res.status(201).send({ sucess: `New ${name}` })
  // res.send({ name: req.body.name, age: req.body.age })
}

module.exports = { getProduct, createProduct }
