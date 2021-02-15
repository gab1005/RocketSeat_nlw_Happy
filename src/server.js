//importar dependencia, pacote. plugin
const { response } = require('express');
const express = require('express');
//coloca as barras de diretorios de acordo com cada sitema
//windows, mac, linux
const path = require('path');
const pages = require('./pages.js')

console.log(pages)

//iniciando o express, 
const server = express()

//colocar apenas barra ('/') = /index.html

server
    //utilizar body do req
    .use(express.urlencoded({ extended: true }))
    //utilizar os arquivos estaticos
    .use(express.static('public'))

    //configuarar o template engine pra q o
    //html seja dinamico e nao static
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    //rotas da apricacao
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)
    

//ligar o servidor
server.listen(5500)
