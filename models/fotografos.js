const {Model} = require('sequelize')
const dataBase = require('./dataBase')//Importando o banco de dados
const sessoes = require('./sessoes')
//Importando a tabela sessões

//Criando a Tabela Fotografos
const fotografos = dataBase.sequelizeconfig.define(
        'fotografos',
        {
            nome:{
                type:dataBase.sequelizeDb.STRING
            },
            especialidade:{
                type:dataBase.sequelizeDb.STRING
            },
            contato:{
                type:dataBase.sequelizeDb.FLOAT
            }
        }
)

//Criando a chave estrangeira
fotografos.hasMany(sessoes,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})
sessoes.belongsTo(fotografos)//Estou dizendo que sessões pertence a apenas 1 fotografo

fotografos.sync()
module.exports = fotografos 