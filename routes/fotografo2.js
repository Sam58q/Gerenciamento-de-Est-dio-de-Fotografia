const express = require('express')
const router = express.Router()

const fotografo = require('../models/fotografos')
const sessoes = require('../models/sessoes')



//CADASTRO DO FOTOGRAFO
router.post('/cadastrar',async(req,res)=>{
    const resultado = await fotografo.create({
        nome: req.body.nome,
        especialidade: req.body.especialidade,
        contato: req.body.contato   
    })
    if(resultado){
        res.redirect('/')
    }
    else{
        res.json({erro:"Não foi possível cadastra os dados"})
    }

})


// Rota - Exibir página raiz da Sessões
router.get('/show',(req,res)=>{
    res.render('Fotografo2/index')
})

// Rota - Consultar dados do banco
router.get('/',async(req,res)=>{
    let resultado = await fotografo.findAll()
    if(resultado){
        console.log(resultado)
        res.render('Fotografo2/index',{dados:resultado})
    }
    else{
        console.log("Não foi possivel exibir os dados")
    }
})

// Rota - deletar dados da tabela sessoes
router.get('/destroy/:id',async(req,res)=>{
    const resultado  = await fotografo.destroy({
      where:{
        id:req.params.id
      }
    })
    res.redirect('/')
})


//Rota - Exibir formulario do fotografo
router.get('/create2',async(req,res)=>{
    res.render('fotografo/addFotografo')
})

module.exports = router