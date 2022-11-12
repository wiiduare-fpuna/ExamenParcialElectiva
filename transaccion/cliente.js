const { Client, conexion } = require('../recurso/conexion');

var objetoJson = {};
var arrayJson = [];

function principal(contenedor) {
    let envio = {};
    if (contenedor.operacion === "listar") {
        envio = listar();
    }
    return envio;
}

function listar() {
    const cliente = new Client(conexion);
    cliente.connect();
    cliente.query("select nombre, apellido, nrodocumento, tipodocumento, nacionalidad, email, telefono, fechanacimiento from cliente;")
        .then(respuesta => {
            arrayJson = respuesta.rows
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => cliente.end())
    return {
        objetoJson: objetoJson,
        arrayJson: arrayJson
    };
}

module.exports = { principal };