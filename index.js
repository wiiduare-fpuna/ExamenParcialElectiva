const express = require('express')//framework de node para extructurar aplicaciones
const bodyParser = require('body-parser')// utilidad para convertir la peticion a json
const app = express()
const puerto = 3000
const funcion = require('./recurso/funcion');//se invoca funcion

app.use(bodyParser.json())

app.route('/')
    .get(function (peticion, respuesta) {
        respuesta.send('Comunicarse por post');
    })
    .post(function (peticion, respuesta) {
        respuesta.send(funcion.distribuidor(peticion.body));
    })

app.listen(puerto, () => {
    console.log(`servidor responde al puerto: ${puerto}`)
})