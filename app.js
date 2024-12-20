const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const porta = 5000

//Configurar express para receber dados do formulário 
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//configurando handlebars
app.engine('handlebars',handlebars.engine({extended:true}))
app.set('view engine','handlebars')

//Carregando as rotas
const fotografoRouter = require('./routes/fotografo')
const fotografo2Router = require('./routes/fotografo2')

//utilizando rotas
app.use('/fotografo',fotografoRouter)
app.use('/fotografo2',fotografo2Router)

//Exibindo informações na tela
app.get('/',(req,res)=>{
    res.render("home")
})
//Executando o servidor
app.listen(porta,()=>{
    console.log("Servidor executando na porta",porta)
})