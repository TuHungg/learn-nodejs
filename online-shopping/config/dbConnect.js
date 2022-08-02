const mongoose = require('mongoose')

const ConnectMN = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = ConnectMN
