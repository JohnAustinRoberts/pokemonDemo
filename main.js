const { readFile, writeFile } = require('fs').promises;
const path = require('path')

async function main() {
    let pokemon = {
        name: "Dragonite",
        type: 'Dragon'
    };

    // let dbs = [];
    // dbs.push(pokemon);

    // console.log(dbs);

    
    const buffer = await readFile(path.join(__dirname, "pokemon.txt"));
    const db = JSON.parse(buffer);
    
    console.log(db);

    db.push(pokemon);

    console.log(db);

    const preSave = JSON.stringify(db);
    await writeFile(path.join(__dirname, 'pokemon.txt'), preSave);
}

main();