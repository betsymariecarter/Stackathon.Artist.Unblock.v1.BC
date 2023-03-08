//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Artwork = require('./models/Artwork')
const Prompt = require('./models/Prompt')

//associations could go here!

User.hasMany(Artwork)
Artwork.belongsTo(User)
Prompt.hasMany(Artwork)
Artwork.hasOne(Prompt)
User.hasMany(Prompt)

module.exports = {
  db,
  models: {
    User,
    Artwork,
    Prompt,
  },
}
