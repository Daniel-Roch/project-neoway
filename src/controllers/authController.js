const express = require('express');
const Address = require('../models/Address')

const router = express.Router();

module.exports = (app) =>{

    app.get('/validation/register', async (req,res)=>{
        try{
            const allAddress = await Address.find()
            res.status(200).json(allAddress)
        }catch(err){
            res.status(500).json({Error: err, Envio: false})
        }
    })
    //CPF
    app.get('/validation/CPF', async (req,res)=>{
        const {CPF} = req.body
        /* try{
            const allAddress = await Address.find()
            res.status(200).json(allAddress)
        }catch(err){
            res.status(500).json({Error: err, Envio: false})
        } */
    })
    //CNPJ
    app.get('/validation/CNPJ', async (req,res)=>{
        const {CNPJ} = req.body
        /* try{
            const allAddress = await Address.find()
            res.status(200).json(allAddress)
        }catch(err){
            res.status(500).json({Error: err, Envio: false})
        } */
    })

    app.post('/validation/store', async (req,res)=>{
        const arrayAddress = req.body
        try{
            await Address.create(...arrayAddress)
            res.status(201).json({message: "Dados Criado com Sucesso", Envio: true})
        }catch(err){
            res.status(500).json({Error: err, Envio: false})
        }
    })

}