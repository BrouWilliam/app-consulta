const express = require('express');
const nunjucks = require('nunjucks')
const db = require('./database/db')


const server = express()

// Configurando Pasta public - Estilos, Scripts, e imagens
server.use(express.static("public"))

// habilitat do req.body
server.use(express.urlencoded({ extended: true }))

// Configurando Template Engine
nunjucks.configure("src/views/", {
    express: server,
    noCache: true
})


server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/doctors", (req, res) => {

    db.all(`SELECT * FROM medicos`, function (err, rows) {

        if (err) {
            return console.log(err)
        }

        return res.render("doctors.html", { medicos: rows })
    })

})

server.get("/date", (req, res) => {

    //console.log(req.query)

    return res.render("date.html")
})

server.post("/savepoint", (req,res) => {

    //console.log(req.body)

    // inserir dados no banco de dados
    
    //00:32:52 do vídeo

    return res.send("ok")
})

server.listen(3000)