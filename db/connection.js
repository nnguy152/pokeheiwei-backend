const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/pokeheiwei')

mongoose.Promise = Promise

module.exports = mongoose