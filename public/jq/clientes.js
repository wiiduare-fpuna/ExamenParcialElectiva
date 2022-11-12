$(function () {
   cargarTabla();
});

$("#btnNuevo").click(function () {
   $("#modalCliente").modal("show");
});

$("#btnGuardar").click(function () {
   console.log($("#txtNombre").val())
   console.log($("#txtApellido").val());
   console.log($("#txtCI").val());
   console.log($("#txtTipo").val());
   console.log($("#txtNacionalidad").val());
   console.log($("#txtEmail").val());
   console.log($("#txtTelefono").val());
   console.log($("#txtNacimiento").val());
   vaciar();
   $("#modalCliente").modal("hide");
});

$("#btnCerrar").click(function () {
   vaciar();
   $("#modalCliente").modal("hide");
});

function vaciar() {
   $("#txtNombre").val("");
   $("#txtApellido").val("");
   $("#txtCI").val("");
   $("#txtTipo").val("");
   $("#txtNacionalidad").val("");
   $("#txtEmail").val("");
   $("#txtTelefono").val("");
   $("#txtNacimiento").val("");
}


function cargarTabla() {
   var filas = "";
   var parametros = {
      "modulo": "cliente",
      "operacion": "listar",
   }
   $.ajax({
      url: "http://localhost:3000/",
      type: "POST",
      data: JSON.stringify(parametros),
      contentType: "application/json",
      dataType: "json",
      success: function (distribuidor) {
         $.each(distribuidor['arrayJson'], function (peticion, respuesta) {
            console.log(distribuidor);
            filas = filas + "<tr><td>" + respuesta["id_cliente"] + "</td><td>" + respuesta["nombre"] + "</td><td>" + respuesta["apellido"] + "</td><td>" + respuesta["nrodocumento"] + "</td><td>" + respuesta["tipodocumento"] + "</td><td>" + respuesta["nacionalidad"] + "</td><td>" + respuesta["email"] + "</td><td>" + respuesta["telefono"] + "</td><td>" + respuesta["fechanacimiento"] + "</td></tr>";
         });
         $("#tabla").html(filas);
      }
   });


}