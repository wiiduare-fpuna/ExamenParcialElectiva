const cliente = require('../transaccion/cliente');//invoca el archivo js que esta en transaccion

function distribuidor(contenedor) {
    let envio = {};
    if (contenedor.modulo === 'cliente') {
        envio = cliente.principal(contenedor);
    }
    return envio;
}//Es la funcion que recibe la peticion y decide a donde enviar

module.exports = { distribuidor }//se exporta la funcion distribuidor 