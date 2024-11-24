const express = require('express')
const router = express.Router()

const fotografo = require('../models/fotografos')
const sessoes = require('../models/sessoes')



//criando rotas
// rota - inserir dados na tabela

router.post('/store',async(req,res)=>{
    const resultado = await sessoes.create({
        cliente: req.body.cliente,
        data: req.body.data,
        tipo: req.body.tipo,
        preco: req.body.preco
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
    res.render('Fotografo/index')
})

// Rota - Consultar dados do banco
router.get('/',async(req,res)=>{
    let resultado = await sessoes.findAll()
    if(resultado){
        console.log(resultado)
        res.render('Fotografo/index',{dados:resultado})
    }
    else{
        console.log("Não foi possivel exibir os dados")
    }
})

// Rota - deletar dados da tabela sessoes
router.get('/destroy/:id',async(req,res)=>{
    const resultado  = await sessoes.destroy({
      where:{
        id:req.params.id
      }
    })
    res.redirect('/')
})


// Rota - exibir formulário
router.get('/create',async(req,res)=>{
        res.render('fotografo/addSessao')
})


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

//Rota - Exibir formulario do fotografo
router.get('/create2',async(req,res)=>{
    res.render('fotografo/addFotografo')
})
   

module.exports = router