const { Client } = require('pg');//se invoca la libreria de postgres

const conexion = {
    user: 'postgres',
    password: 'automovil',
    host: 'localhost',
    port: '5432',
    database: 'dbelectiva'
}//se declara la configuracion a la base de datos

module.exports = { Client, conexion };//se exportan el client y la configuracion