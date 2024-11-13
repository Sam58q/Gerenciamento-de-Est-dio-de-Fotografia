const {sequelizeDb,sequelizeconfig} = require('./dataBase')

const sessoes = sequelizeconfig.define(
        'sessoes',
        {
        cliente:{
            type:sequelizeDb.STRING
        },
        data:{
            type:sequelizeDb.FLOAT
        },
        tipo:{
            type:sequelizeDb.STRING
        },
        preco:{
            type:sequelizeDb.FLOAT
        }

        }
    
)
sessoes.sync()
module.exports = sessoes