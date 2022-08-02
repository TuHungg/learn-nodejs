require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/dbConnect')

app.use(express.json())
const PORT = 3000

// connect MongoDB
connectDB()

app.get('/', (req, res) => {
  res.sendStatus(200).send('Connect server success')
})

// router
app.use('/product', require('./routes/api/product'))

app.all('*', (req, res) => {
  res.sendStatus(404).type('txt').send('404 Not Found 😵‍💫')
})

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')

  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT} at: ${new Date().toLocaleString()}`)
  })
})
