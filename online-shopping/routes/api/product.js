const express = require('express')
const router = express.Router()
const productController = require('../../controllers/productController')

router
  .route('/')
  .get(productController.getProduct)
  .post(productController.createProduct)
  .delete((req, res) => {
    res.send('Delete')
  })
  .put((req, res) => {
    res.send('Patch')
  })

router.route('/:id').get((req, res) => {
  res.send(req.params)
})

module.exports = router
