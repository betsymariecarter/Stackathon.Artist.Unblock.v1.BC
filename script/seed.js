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
    User.create({ username: 'betsy', password: '123', pronouns: 'She/Her', email: "betsymariecarter@gmail.com", about: "An artist also learning how to code.", avatar: "https://cdn.discordapp.com/attachments/474659435881693184/1084640927991222382/image.png"}),
    User.create({ username: 'aimi', password: '123', pronouns: 'She/Her, They/Them', email: "mistressAi00@gmail.com", about: "Wouldn't you like to know, weatherboy?", avatar: "https://f2.toyhou.se/file/f2-toyhou-se/characters/337068?1652599832"}),
  ])

  const betsy = users[0]
  const aimi = users[1];

  const prompts = await Promise.all([
    Prompt.create({
      shortPrompt: 'Draw your character as a Vampire.',
      category:"doodle",
      expandedPrompt: "What it says on the tin. There's sparkly romance novel types, spooky Halloween types, legitimately scary vampires, etc.",
    }),
    Prompt.create({
      shortPrompt: 'Make a drawing based on a song.',
      category:"creative",
      expandedPrompt: "Put on a song you love and draw a piece based on it. BONUS: include the title of the song in your description!",
    }),
    Prompt.create({
      shortPrompt: 'Create a piece utilizing perspective.',
      category:"practice",
      expandedPrompt: "Test your skills by putting a figure in a space, drawing a background, use foreshortening, or utilize a unique angle.",
    }),
  ])

  const vampire = prompts[0];
  const song = prompts[1];
  const perspective = prompts[2];

  const gallery = await Promise.all([
    Artwork.create({
      title: 'DPS',
      imageUrl:"https://f2.toyhou.se/file/f2-toyhou-se/images/59908907_Gr71Bf6IltuJ23R.png",
      description: "A piece of Artwork.",
      medium: "Digital",
      userId: betsy.id,
      promptId: perspective.id,
    }),
    Artwork.create({
      title: 'Brides',
      imageUrl:"https://f2.toyhou.se/file/f2-toyhou-se/images/62306046_tgNivL4RGgvNB4R.png",
      description: "Inspired by a photoshoot of Shiina Ringo.",
      medium: "Digital",
      userId: aimi.id,
      promptId: perspective.id,
    }),
    Artwork.create({
      title: 'Peek-A-Boo',
      imageUrl:"https://f2.toyhou.se/file/f2-toyhou-se/images/62306138_WzeVVHesgYmm1A5.png",
      description: "Inspired by 'Peek-A-Boo' by Red Velvet.",
      medium: "Digital",
      userId: betsy.id,
      promptId: song.id,
    }),
    Artwork.create({
      title: 'Scientist',
      imageUrl:"https://f2.toyhou.se/file/f2-toyhou-se/images/52573119_pjuTz8TUzc8M7Im.png",
      description: "Inspired by 'Scientist' by Twice.",
      medium: "Digital",
      userId: betsy.id,
      promptId: song.id,
    }),
    Artwork.create({
      title: 'Halloween Special',
      imageUrl:"https://f2.toyhou.se/file/f2-toyhou-se/images/62305228_s4NnyM8kIUJiKG3.png",
      description: "Festive art featuring Io's character, Himeo.",
      medium: "Digital",
      userId: betsy.id,
      promptId: vampire.id,
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
