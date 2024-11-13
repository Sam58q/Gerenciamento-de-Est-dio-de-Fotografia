const sequelizeDb = require("sequelize")
const sequelizeconfig = new sequelizeDb(
    'estudioFotografia_db',
    'root',
    '',
    {
        dialect:'sqlite',
        storage:'./estudioFotografia.sqlite'//
    }
)

module.exports = {sequelizeDb,sequelizeconfig}