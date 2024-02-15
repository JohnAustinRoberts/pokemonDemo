const {db} = require('../db/connection.js');
const Pokemon = require('./models/Pokemon.js');

async function main() {

    await db.sync({ force: true});

    const Pikachu = await Pokemon.create({
        name: "Pikachu",
        type: "Electric",
        weight: 6
    });

    console.log(JSON.stringify(Pikachu, null, 2));

    await Pokemon.bulkCreate([
        {
            name: "Bulbasaur",
            type: "Grass/Poison",
            weight: 6
        },
        {
            name: "Charmander",
            type: "fire",
            weight: 10
        },
        {
            name:"Squirtle",
            type: "Water",
            weight: 9
        }
    ]);

    let currentPokemon = await Pokemon.findOne({ where: {name : "Pikachu"}});
    console.log(JSON.stringify(currentPokemon, null, 2));
    let allPokemon = await Pokemon.findAll();
    console.log(JSON.stringify(allPokemon, null, 2));

    const updateResult = await Pokemon.update({name:"Ivysaur", weight: 13}, {where: {name: "Bulbasaur"}});
    currentPokemon = await Pokemon.findOne({ where: {name: "Ivysaur"}});
    console.log(JSON.stringify(currentPokemon, null, 2));

    const deleteResult = await Pokemon.destroy({ where: {name: "Squirtle"}});
    allPokemon = await Pokemon.findAll();
    console.log(JSON.stringify(allPokemon, null, 2))
}

main();