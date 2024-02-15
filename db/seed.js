const { db } = require("./connection.js");
const { Pokemon, Trainer, Badge } = require("../src/models");
const { pokemon, trainers, badges } = require("./seedData.js");

async function seed() {
  await db.sync({ force: true });

  await Pokemon.bulkCreate(pokemon);
  await Trainer.bulkCreate(trainers);
  await Badge.bulkCreate(badges);
}

seed();