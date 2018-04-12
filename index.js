const express = require('express')
const app = express()
const parser = require('body-parser')
const cors = require('cors')

const Pokemon = require('./models/Pokemon')

app.use(parser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
   Pokemon.find({}).then(pokemon => {
      console.log(res.json(pokemon))
      res.json(pokemon)
   })
})

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => console.log(`Gotta cache them all on ${app.get('port')}`))
