const { db, DataTypes, Model} = require("../../db/connection.js");

class Pokemon extends Model {}

Pokemon.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    weight: DataTypes.DECIMAL(10,2)
},
{
   sequelize: db,
   modelName: 'Pokemon' 
});

module.exports = Pokemon;