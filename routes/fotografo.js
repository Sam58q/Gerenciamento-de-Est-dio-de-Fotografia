const express = require('express')
const router = express.Router()

const fotografo = require('../models/fotografos')
const sessoes = require('../models/sessoes')

//criando rotas
//1ª rota - inserir dados na tabela

router.post('/store',async(req,res)=>{
    const resultado = await fotografo.create({
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
   

//2ª Rota - Exibir página raiz do fotografo
router.get('/show',(req,res)=>{
    res.render('fotografos/index')
})

//3ª Rota - Consultar dados do banco
router.get('/',async(req,res)=>{
    let resultado = await fotografo.findAll()
    if(resultado){
        console.log(resultado)
        res.render('funcionario/index',{dados:resultado})
    }
    else{
        console.log("Não foi possivel exibir os dados")
    }
})

//4ª Rota - deletar dados da tabela
router.get('/destroy/:id',async(req,res)=>{
    const resultado  = await fotografo.destroy({
      where:{
        id:req.params.id
      }
    })
    res.redirect('/')
})


//5ª Rota - exibir formulário
router.get('/create',async(req,res)=>{
        res.render('fotografo/addSessao')
})
module.exports = router