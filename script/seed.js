'use strict'

const {db, models: {User, Artwork, Prompt} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'betsy', password: '123' }),
    User.create({ username: 'aimi', password: '123' }),
  ])

  const betsy = users[0]
  const aimi = users[1];

  const gallery = await Promise.all([
    Artwork.create({
      title: 'DPS',
      imageUrl:"/art/art1.png",
      description: "A piece of Artwork.",
      medium: "Digital",
      userId: betsy.id
    }),
    Artwork.create({
      title: 'Brides',
      imageUrl:"/art2.png",
      description: "Inspired by a photoshoot of Shiina Ringo.",
      medium: "Digital",
      userId: aimi.id
    }),
    Artwork.create({
      title: 'Peek-A-Boo',
      imageUrl:"/art3.png",
      description: "Inspired by 'Peek-A-Boo' by Red Velvet.",
      medium: "Digital",
      userId: betsy.id
    }),
    Artwork.create({
      title: 'Scientist',
      imageUrl:"/art4.png",
      description: "Inspired by 'Scientist' by Twice.",
      medium: "Digital",
      userId: betsy.id
    }),
    Artwork.create({
      title: 'Halloween Special',
      imageUrl:"/art5.png",
      description: "Festive art featuring Io's character, Himeo.",
      medium: "Digital",
      userId: betsy.id
    }),
  ])

  const prompts = await Promise.all([
    Prompt.create({
      shortPrompt: 'Draw your character as a Vampire.',
      category:"doodle",
      expandedPrompt: "What it says on the tin. There's sparkly romance novel types, spooky Halloween types, legitimately scary vampires, etc.",
    }),
    Prompt.create({
      shortPrompt: 'Make a drawing based on a song.',
      category:"creative",
      expandedPrompt: "Put on a song you love and draw a piece based on it.",
    }),
    Prompt.create({
      shortPrompt: 'Create a piece utilizing perspective.',
      category:"practice",
      expandedPrompt: "Test your skills by putting a figure in a space, drawing a background, use foreshortening, or utilize a unique angle.",
    }),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      betsy: users[0],
      aimi: users[1]
    },
    gallery: {
      art1: gallery[0],
      art2: gallery[1],
      art3: gallery[2],
      art4: gallery[3],
      art5: gallery[4],
    },
    prompts: {
      vampire: prompts[0],
      song: prompts[1],
      perspective: prompts[2],
    }
  }
}
  
/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
