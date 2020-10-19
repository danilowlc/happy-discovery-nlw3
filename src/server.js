//importar dependencias
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

//iniciando o Express
const server = express()

server

    //utlizar req do body
    .use(express.urlencoded({extended: true}))

    //utlizando diretorios estaticos
    .use(express.static('public'))

    //configurando template engine
    .set('views',path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    //Rotas da Aplicacao
    .get('/', pages.index)
    .get('/orphanages', pages.orphanages)
    .get('/orphanage', pages.orphanage)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

    //ligando o servidor
    .listen(5500)