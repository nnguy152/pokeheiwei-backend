const Pokemon = require('../models/Pokemon')
const fetch = require('node-fetch')


Pokemon.find({}).then(() => {
   for (var i = 780; i < 800; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
         .then(res => res.json())
         .then(res => {
            Pokemon.create({
               name: res.forms[0].name,
               height: res.height,
               weight: res.weight,
               img: res.sprites.front_default
            })
            console.log("NAME: " + res.forms[0].name)
         })
         .catch((err) => {
            console.log(err)
         })
   }
})